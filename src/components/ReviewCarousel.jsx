import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import useEmblaCarousel from 'embla-carousel-react'
import { Logo5 } from '../svg-components/SvgLogos'
import AllanRevImg from '../assets/Allan_Rev_Img.png'
import AmandaRevImg from '../assets/Amanda_Rev_Img.png'
import JohnRevImg from '../assets/John_Rev_Img.png'
import JamesRevImg from '../assets/James_Rev_Img.png'

const REVIEW_CONTENT = [
  {
    reviewerName: 'Allan Prosser',
    reviewerOccupation: 'CEO of Tradus',
    reviewContent: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam officiis ea odit, at iusto reiciendis, autem deserunt sit perspiciatis ducimus voluptatum exercitationem voluptates veniam beatae possimus dignissimos incidunt voluptate molestias non! Repudiandae perspiciatis veritatis officia suscipit voluptatibus libero delectus.',
    imgOnFile: AllanRevImg,
    imgCredits: 'https://unsplash.com/photos/pAtA8xe_iVM',
    rating: 4
  },
  {
    reviewerName: 'John Diedrich',
    reviewerOccupation: 'React Developer at Dteche',
    reviewContent: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam officiis ea odit, at iusto reiciendis, autem deserunt sit perspiciatis ducimus voluptatum exercitationem voluptates veniam beatae possimus dignissimos incidunt voluptate molestias non! Repudiandae perspiciatis veritatis officia suscipit voluptatibus libero delectus.',
    imgOnFile: JohnRevImg,
    imgCredits: 'https://unsplash.com/photos/yIOViGQmjJ4',
    rating: 5
  },
  {
    reviewerName: 'James Whitten',
    reviewerOccupation: 'Senior UI/UX Engineer at Maketech',
    reviewContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil ut in maxime harum, hic fuga cumque, id, architecto quod amet tempora nemo illo placeat voluptas dolore porro quo.',
    imgOnFile: JamesRevImg,
    imgCredits: 'https://unsplash.com/photos/WC7KIHo13Fc',
    rating: 4
  },
  {
    reviewerName: 'Amanda Mullen',
    reviewerOccupation: 'Chief Technology Officer At Nextec',
    reviewContent: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam officiis ea odit, at iusto reiciendis, autem deserunt sit perspiciatis ducimus voluptatum exercitationem voluptates veniam beatae possimus dignissimos incidunt voluptate molestias non! Repudiandae perspiciatis veritatis officia suscipit voluptatibus libero delectus.',
    imgOnFile: AmandaRevImg,
    imgCredits: 'https://unsplash.com/photos/0Zx1bDv5BNY',
    rating: 5
  },
]

const ReviewCard = ({ imgSrc, reviewContent, reviewerName, reviewerOccupation, rating }) => {

  const getStars = (ratingParam) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < parseInt(ratingParam)) {
        stars.push(<AiFillStar key={i} className='fill-primaryText' />);
      } else {
        stars.push(<AiOutlineStar key={i} className='fill-primaryText' />);
      }
    }
    return stars;
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto w-[700px] text-white'>
      <img src={imgSrc} alt='Reviewer_Image' loading='lazy' className='w-36 h-36 rounded-full object-cover mb-3' />
      <div className='flex flex-row text-3xl mb-8'>
        {getStars(rating)}
      </div>
      <p className='mb-10 text-xl'>{reviewContent}</p>
      <div className='flex flex-row items-center h-fit gap-4'>
        <div className='flex flex-row items-center'>
          <div className='w-11 h-11 mt-2 fill-primary'>
            <Logo5 />
          </div>
          <h1 className='font-bold text-3xl'>Orion</h1>
        </div>
        <div className='w-[2px] h-[60px] bg-primaryText' />
        <div className='flex flex-col'>
          <h3 className='text-2xl font-bold'>{reviewerName}</h3>
          <a href='/#' className='font-medium text-lg text-accent hover:underline'>{reviewerOccupation}</a>
        </div>
      </div>
    </div>
  )
}


const ReviewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: true, })

  return (
    <div className='flex flex-row items-center justify-center gap-8'>
      <button className='review-carousel-prev text-primaryText text-7xl active:scale-90' onClick={() => {emblaApi.scrollPrev()}}>
        <BsChevronLeft />
      </button>
      <div className="embla overflow-hidden max-w-[800px] py-14" ref={emblaRef}>
        <div className="embla__container flex">
          {REVIEW_CONTENT.map((item, index) => {
            return (
              <div key={index} className="embla__slide">
                <ReviewCard
                  reviewContent={item.reviewContent}
                  reviewerName={item.reviewerName}
                  reviewerOccupation={item.reviewerOccupation}
                  imgSrc={item.imgOnFile}
                  rating={item.rating}
                />
              </div>
            )
          })}
        </div>
      </div>
      <button className='review-carousel-next text-primaryText text-7xl active:scale-90' onClick={() => {emblaApi.scrollNext()}}>
        <BsChevronRight />
      </button>
    </div>
  )
}

export default ReviewCarousel