import React, { useContext } from 'react';
import Header from './components';
import { WrapperComponent } from 'components';
import { HeaderContext, CurtainContext } from 'contexts';

const HeaderComponent = ({ children, navItems, navIcons, ...restProps }) => {
  const { bagOpen, setBagOpen, search, setSearch, setKeyword, inputClick } = useContext(
    HeaderContext.store
  );
  const { curtain, setCurtain } = useContext(CurtainContext.store);

  return (
    <Header inputClick={inputClick} search={search} {...restProps}>
      <Header.Navigation>
        <WrapperComponent>
          <Header.List>
            <Header.ListItem
              datatype="hamburgerIcon"
              onClick={() => {
                setSearch(!search);
                setCurtain(!curtain);
                setKeyword('');
              }}>
              <Header.Icon className={navIcons.hamburgerIcon}></Header.Icon>
            </Header.ListItem>
            <Header.ListItem datatype="logoIcon">
              <Header.Link to="/">
                <Header.Icon className={navIcons.logoIcon}></Header.Icon>
              </Header.Link>
            </Header.ListItem>
            {navItems.map((item, index) => (
              <Header.ListItem datatype="item" key={index}>
                <Header.Link to={item.linkTo}>{item.name}</Header.Link>
              </Header.ListItem>
            ))}
            <Header.ListItem
              datatype="searchIcon"
              onClick={() => {
                setSearch(!search);
                setCurtain(!curtain);
              }}>
              <Header.Icon className={navIcons.searchIcon}></Header.Icon>
            </Header.ListItem>
            <Header.ListItem datatype="bagIcon" onClick={() => setBagOpen(!bagOpen)}>
              <Header.Icon className={navIcons.bagIcon}></Header.Icon>
            </Header.ListItem>
          </Header.List>
        </WrapperComponent>
      </Header.Navigation>
      <Header.Aside>{children}</Header.Aside>
    </Header>
  );
};

export default HeaderComponent;
