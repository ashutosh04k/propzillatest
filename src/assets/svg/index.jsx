import Icon from '@ant-design/icons';
import TestimonialSVG from '../svg/Testimonial.svg';
import SearchSVG from '../svg/Search.svg';
import RightArrowSVG from '../svg/arrow.svg';
import HamburgerSVG from '../svg/hamberger.svg';
import ArroSVG from '../svg/arro.svg';

const getSVG = (path, style) => (
  <img src={path} alt="Icon" style={{ ...style }} />
);

export const TestimonialIcon = (props) => {
  return <Icon component={()=>getSVG(TestimonialSVG,props.iconstyle)} {...props}  />;
};

export const SearchIcon = (props) => {
  return <Icon component={()=>getSVG(SearchSVG,props.iconstyle)} {...props}  />;
};

export const RightArrowIcon = (props) => {
  return <Icon component={()=>getSVG(RightArrowSVG,props.iconstyle)} {...props}  />;
};

export const HambergerIcon = (props) => {
  return <Icon component={()=>getSVG(HamburgerSVG,props.iconstyle)} {...props}  />;
};

export const ArroIcon = (props) => {
  return <Icon component={()=>getSVG(ArroSVG,props.iconstyle)} {...props}  />;
};