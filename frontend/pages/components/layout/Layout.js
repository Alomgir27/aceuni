import { Logout32, Upload24, UserProfile24, Settings24, Education32 } from '@carbon/icons-react';
import { HeaderNavigation, HeaderMenuItem, HeaderMenu, HeaderContainer, HeaderMenuButton, Header, HeaderName,
    HeaderGlobalAction, HeaderGlobalBar, SideNav, SideNavItems, SideNavLink, SkipToContent} from "carbon-components-react/lib/components/UIShell";
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/auth';

const Layout = ({children}) => {
    const push = useRouter().push
    const { logout } = useAuth();
    return (
        <>
            <div className="container">
                <HeaderContainer
                    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                        <>
                            <Header aria-label="aceuni">
                                <SkipToContent />
                                <HeaderMenuButton
                                    aria-label="Open menu"
                                    onClick={onClickSideNavExpand}
                                    isActive={isSideNavExpanded}
                                />
                                <HeaderName onClick={() => push('/home')}  prefix="">
                                <Education32 /> 
                                ACEUNI
                                </HeaderName>
                                <HeaderNavigation aria-label="Aceuni">
                                    <HeaderMenuItem onClick={() => push('/home/help')}>Help</HeaderMenuItem>
                                    <HeaderMenuItem href="#">Donate</HeaderMenuItem>
                                    <HeaderMenu aria-label="univerities" menuLinkName="Univerities">
                                        <HeaderMenuItem href="#">Carleton University</HeaderMenuItem>
                                        <HeaderMenuItem href="#">UOttawa</HeaderMenuItem>
                                        <HeaderMenuItem href="#">Algonquin</HeaderMenuItem>
                                    </HeaderMenu>
                                    <HeaderMenu aria-label="courses" menuLinkName="Courses">
                                        <HeaderMenuItem href="#">COMP4004</HeaderMenuItem>
                                        <HeaderMenuItem href="#">COMP1001</HeaderMenuItem>
                                        <HeaderMenuItem href="#">COMP1005</HeaderMenuItem>
                                    </HeaderMenu>

                                </HeaderNavigation>
                                <HeaderGlobalBar>
                        
                                    <HeaderGlobalAction aria-label="Logout" onClick={() => logout()}>
                                        <Logout32 style={{ "marginRight": "15px" }} />
                                    </HeaderGlobalAction>
                                </HeaderGlobalBar>
                                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                                    <SideNavItems>
                                        <SideNavLink renderIcon={UserProfile24} onClick={() => { push('/home/profile') }} >

                                            {/* <UserProfile24 />*/}
                                            <h4>Profile</h4>
                                        </SideNavLink>
                                        <SideNavLink renderIcon={Settings24} onClick={() => { push('/home/settings') }}>
                                            <h4>Settings</h4>
                                        </SideNavLink>
                                        <SideNavLink renderIcon={Upload24} onClick={() => { push('/home/upload') }}>
                                            <h4>Upload Material</h4>
                                        </SideNavLink>

                                    </SideNavItems>
                                </SideNav>
                            </Header>
                            <br />
                            <br />
                            <br />
                            <br />
                            {/* Here i'm going to have links instead of story content */}
                        </>
                    )}
                />
            </div>
            <div style={{ zIndex: 5, margin:'2rem 0 0 16rem' }}>
                {children}
            </div>
        </>
    )
}

export default Layout;