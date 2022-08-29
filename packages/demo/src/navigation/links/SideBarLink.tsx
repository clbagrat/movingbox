import './SideBarLink.css';

type SideBarLinkProps = {
    link: string
};

export const SideBarLink = ({ link }: SideBarLinkProps) => {
  return (
    <div className='sidebar-link'>
        {link}
    </div>
  )
}
