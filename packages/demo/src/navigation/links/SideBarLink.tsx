import { Link } from 'react-router-dom';
import './SideBarLink.css';

type SideBarLinkProps = {
    title: string,
    path: string
};

export const SideBarLink = ({ title, path }: SideBarLinkProps) => {
  return (
    <Link to={path} className='sidebar-link'>
        {title}
    </Link>
  )
}
