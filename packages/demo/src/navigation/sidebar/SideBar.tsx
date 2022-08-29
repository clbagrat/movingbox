import { SideBarLink } from '../links/SideBarLink';
import './SideBar.css';

export const sidebarWidth = 20;

export const SideBar = () => {
  return (
    <div className='sidebar' style={{ width: `${sidebarWidth}%` }}>
      <h3>Topics</h3>
      <SideBarLink link='About' />
      <h3>Examples</h3>
      <SideBarLink link='AddMove' />
      <SideBarLink link='ButtonModal' />
      <SideBarLink link='TwoLists' />
    </div>
  )
}
