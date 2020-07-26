import React, { Component } from 'react';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Components
import SideDrawer from './SideDrawer';

class Header extends Component {

  state = {
    drawerState: false,
    headerShow: false,
  }

  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener();
  }

  handleScroll = () => {
    if (window.scrollY > 0) this.setState({ headerShow: true});
    else this.setState({ headerShow: false});
  }

  openDrawer = () => {
    this.setState({ drawerState: true})
  }

  closeDrawer = () => {
    this.setState({ drawerState: false})
  }

  render() {
    return (
      <div>
         <AppBar
            position="fixed"
            style={{
              backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
              boxShadow: 'none',
              padding: '10px 10px'
            }}
         >
           <ToolBar>
             <div className="header_logo">
               <div className="font_righteous header_logo_venue"> The Venue</div>
               <div className="header_logo_title"> Musical Events</div>
             </div>
             <IconButton
                aria-label="Menu"
                color="inherit"
                onClick={this.openDrawer}
             >
               <MenuIcon/>
             </IconButton>
             <SideDrawer 
                open={this.state.drawerState}
                onClose={this.closeDrawer}
             />
           </ToolBar>
         </AppBar>
      </div>
    );
  }
}

export default Header;