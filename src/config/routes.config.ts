import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type MetaInfoProps = {
  readonly title?: string;
  readonly description?: string;
};

export type Route = {
  readonly path: string;
  readonly icon: IconProp;
  readonly exact?: boolean;
  readonly displayName: string;
  readonly activeClassName: string;
  readonly metaInfo: MetaInfoProps;
};

export const RoutesConfig = Object.freeze<Record<string, Route>>({
  Home: {
    path: '/',
    exact: true,
    displayName: 'Inicio',
    activeClassName: 'is-active',
    icon: 'home',
    metaInfo: {
      title: 'Home | Blue Monkey Web Studios',
      description: 'Home page description - lorem ipsum dollor siet'
    }
  },
  Services: {
    path: '/services',
    exact: true,
    displayName: 'Servicios',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Servicios | Blue Monkey Web Studios',
      description: 'services page description - lorem ipsum dollor siet'
    }
  }
});
