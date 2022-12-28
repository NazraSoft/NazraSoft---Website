import React from 'react';
import { createBoard } from '@wixc3/react-board';
import about from '../../../../pages/about';

export default createBoard({
    name: 'about',
    Board: () => <about />
});
