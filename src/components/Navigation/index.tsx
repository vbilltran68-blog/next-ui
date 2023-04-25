import Icon from '@components/Icon'
import { NavigationItem } from '@interfaces/navigation';
import cs from 'classnames'
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavItemWrapper, Wrapper } from './styled';

type NavItemProps = {
  data: NavigationItem;
  isActive: boolean;
}

const NavItem = (props: NavItemProps) => {
  const { data, isActive } = props;
  return (
    <NavItemWrapper className={cs({ active: isActive })}>
      <Link href={data.href}>
          <Icon src={data.icon} size={30} />
          <div className="title">{data.label}</div>
      </Link>
    </NavItemWrapper>

  )
}

type NavigationProps = {
  items: NavigationItem[];
  className?: string | undefined;
}

const Navigation = (props: NavigationProps) => {
  const { items, className } = props
  const router = useRouter()

  return (
    <Wrapper className={cs(className)}>
      {items.map((nav, index) => <NavItem key={`nav-${index}`} data={nav} isActive={router.pathname === nav.href} />)}
    </Wrapper>
  )
}

export default Navigation
