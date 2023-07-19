import { createGlobalState } from 'react-hooks-global-state';

export const { useGlobalState } = createGlobalState({ nowPlaying:{
    id: 0,
    nameMusic: 'Relax with my cat',
    linkMusic:'https://youtu.be/GrG2-oX5z24',
}});

