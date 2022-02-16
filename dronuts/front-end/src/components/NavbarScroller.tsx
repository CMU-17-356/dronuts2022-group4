import * as React from 'react';
import { Link } from 'react-router-dom';

const NavbarScroller = (props: {
  brand: { name: string; to: string },
  links: Array<{ name: string, to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () => links.map((link: { name: string, to: string }) =>
    <li key={link.name}><Link to={link.to}>{ link.name }</Link></li>
  );
  return (
    <div>
      <Link to="/">{ brand.name }</Link>
      <NavLinks />
    </div>
  )
};

export default NavbarScroller;
