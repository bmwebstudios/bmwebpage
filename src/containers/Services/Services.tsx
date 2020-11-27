import React from 'react';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services: React.FC = () => (
  <section className='container view-wrapper'>
    <MetaInfo {...RoutesConfig.Services.metaInfo} />
    <div className='tile is-parent is-8 is-vertical is-notification-tile'>
      <div className='notification tile is-child is-primary pageSlideDown-animation'>
        <div>
          <FontAwesomeIcon icon='info-circle' size='2x' />
          <span className='title'>Services Page</span>
        </div>
        <p className='subtitle'>Inserte Opcion detallda de servicios.</p>
      </div>
    </div>
  </section>
);

export default Services;
