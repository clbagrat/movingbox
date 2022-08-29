import { SideBarLink } from '../links/SideBarLink';
import './SideBar.css';

export const sidebarWidth = 20;

export const SideBar = () => {
  return (
    <div className='sidebar' style={{ width: `${sidebarWidth}%` }}>
      <h3>Topics</h3>
      <SideBarLink path='/overview' title='Overview' />
      <h3>Examples</h3>
      <SideBarLink path='/add-move' title='AddMove' />
      <SideBarLink path='/button-modal' title='ButtonModal' />
      <SideBarLink path='/two-lists' title='TwoLists' />
    </div>
  )
}
