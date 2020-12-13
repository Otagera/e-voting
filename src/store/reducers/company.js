import * as actionTypes from '../actions/actionTypes';

import myHome from '../../assets/svgs/myhome.svg';
import insure from '../../assets/svgs/insure.svg';
import manage from '../../assets/svgs/manage.svg';
import faceIt from '../../assets/svgs/faceit.svg';

import ye from '../../assets/images/ye.jpg';
import agera from '../../assets/images/agera.jpg';
import baby from '../../assets/images/baby.jpg';
import ali from '../../assets/images/ali.jpg';
import mi from '../../assets/images/mi.jpg';
import { updateObject } from '../utility';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const initialSTate = {
	/*companies: [
  	{
  		name: 'My Home',
 			img: myHome,
 			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
 			socials: {
				fb: 'https://www.facebook.com/MyHome',
 				twitter: 'https://www.twitter.com/MyHome',
 				insta: 'https://www.instagram.com/MyHome',
 				website: 'https://www.myhome.com'
      },
      competitions: [
        {
          name: 'The 6th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 1
        },
        {
          name: 'The 5th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 2
        },
        {
          name: 'The 4th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 3
        },
        {
          name: 'The 3rd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 4
        },
        {
          name: 'The 2nd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 5
        },
        {
          name: 'The 1st Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 6
        }
      ],
      fakeId: 1
    },
    {
      name: 'Insure',
      img: insure,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
      socials: {
        fb: 'https://www.facebook.com/Insure',
        twitter: 'https://www.twitter.com/Insure',
        insta: 'https://www.instagram.com/Insure',
        website: 'https://www.insure.com'
      },
      competitions: [
        {
          name: 'The 6th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 1
        },
        {
          name: 'The 5th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 2
        },
        {
          name: 'The 4th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 3
        },
        {
          name: 'The 3rd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 4
        },
        {
          name: 'The 2nd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 5
        },
        {
          name: 'The 1st Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 6
        }
      ],
      fakeId: 2
    },
    {
      name: 'Manage',
      img: manage,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
      socials: {
        fb: 'https://www.facebook.com/manage',
        twitter: 'https://www.twitter.com/manage',
        insta: 'https://www.instagram.com/manage',
        website: 'https://www.manage.com'
      },
      competitions: [
        {
          name: 'The 6th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 1
        },
        {
          name: 'The 5th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 2
        },
        {
          name: 'The 4th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 3
        },
        {
          name: 'The 3rd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 4
        },
        {
          name: 'The 2nd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 5
        },
        {
          name: 'The 1st Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 6
        }
      ],
      fakeId: 3
    },
    {
      name: 'FaceIt',
      img: faceIt,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
      socials: {
        fb: 'https://www.facebook.com/faceit',
        twitter: 'https://www.twitter.com/faceit',
        insta: 'https://www.instagram.com/faceit',
        website: 'https://www.faceit.com'
      },
      competitions: [
        {
          name: 'The 6th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 1
        },
        {
          name: 'The 5th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 2
        },
        {
          name: 'The 4th Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 3
        },
        {
          name: 'The 3rd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 4
        },
        {
          name: 'The 2nd Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 40,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 25,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 12,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 55,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 3,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 2,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 5
        },
        {
          name: 'The 1st Annual Most Sly Competition',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam! Nesciunt illum minima illo velit harum, in! Corrupti autem officiis, beatae ipsa minima sequi ab at, ducimus consequuntur incidunt deleniti?',
          categories: [
            {
              name: 'Males',
              contestants: [
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 35,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 32,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 24,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 5,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 4,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 1
            },
            {
              name: 'Females',
              contestants: [
                {
                  name: 'Contestant 3',
                  img: baby,
                  percentage: 30,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 3,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_3',
                    twitter: 'https://www.twitter.com/contestant_3',
                    insta: 'https://www.instagram.com/contestant_3'
                  }
                },
                {
                  name: 'Contestant 5',
                  img: mi,
                  percentage: 22,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 5,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_5',
                    twitter: 'https://www.twitter.com/contestant_5',
                    insta: 'https://www.instagram.com/contestant_5'
                  }
                },
                {
                  name: 'Contestant 2',
                  img: agera,
                  percentage: 20,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 2,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_2',
                    twitter: 'https://www.twitter.com/contestant_2',
                    insta: 'https://www.instagram.com/contestant_2'
                  }
                },
                {
                  name: 'Contestant 1',
                  img: ye,
                  percentage: 18,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 1,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_1',
                    twitter: 'https://www.twitter.com/contestant_1',
                    insta: 'https://www.instagram.com/contestant_1'
                  }
                },
                {
                  name: 'Contestant 4',
                  img: ali,
                  percentage: 10,
                  quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illum amet id, consequatur aliquid eligendi nihil excepturi qui praesentium molestiae quisquam assumenda rerum eaque officiis sunt hic quod ipsa fugit!',
                  fakeId: 4,
                  socials: {
                    fb: 'https://www.facebook.com/contestant_4',
                    twitter: 'https://www.twitter.com/contestant_4',
                    insta: 'https://www.instagram.com/contestant_4'
                  }
                }
              ],
              fakeId: 2
            }
          ],
          fakeId: 6
        }
      ],
      fakeId: 4
    }
	],*/
  faSocials: {
  	fb: faFacebook,
   	twitter: faTwitter,
   	insta: faInstagram,
   	website: faGlobe
  }
}

const reducer = (state= initialSTate, action) => {
	switch (action.type) {
		case actionTypes.ADD_COMPANY:
      const updatedStateAddCompany = { ...state };

      for(let i = 0; i < updatedStateAddCompany.companies.length; i++){
        if(updatedStateAddCompany.companies[i].fakeId !== i + 1){
          var newID_ACy = i + 1;
          break;
        }
      }
      if(!action.newCompany.img){
        action.newCompany.img = ye;
      }
      action.newCompany.fakeId = newID_ACy || updatedStateAddCompany.companies.length + 1;
      updatedStateAddCompany.companies.push(action.newCompany);
			return updateObject(state, updatedStateAddCompany);
    case actionTypes.REMOVE_COMPANY:
      return state;
    case actionTypes.EDIT_COMPANY:
      const { companies } = state ;
      for(let i = 0 ; i < companies.length ; i++){
        if(companies[i].fakeId === action.editedCompany.fakeId){
          companies[i] = action.editedCompany;
        }
      }
      return updateObject(state, { selectedCompany: action.editedCompany, companies: companies });
    case actionTypes.GET_COMPANIES:
      const updatedStateGetCompanies = { ...state };
      updatedStateGetCompanies.companies = action.companies;
      return updateObject(state, updatedStateGetCompanies);
    case actionTypes.GET_COMPANY:
      return updateObject(state, { selectedCompany: action.company });
    case actionTypes.ADD_COMPETITION:
      const companies_ACn = state.companies;
      const selectedCompanyCompA_C = [ ...state.selectedCompany.competitions ];

      for(let i = 0; i < selectedCompanyCompA_C.length; i++){
        if(selectedCompanyCompA_C[i].fakeId !== i + 1){
          var newID_ACn = i + 1;
          break;
        }
      }
      action.newCompetition.fakeId = newID_ACn || selectedCompanyCompA_C.length + 1;

      selectedCompanyCompA_C.push(action.newCompetition);
      const selectedCompanyA_C = updateObject(state.selectedCompany.competitions, selectedCompanyCompA_C);
      for(let i = 0 ; i < companies_ACn.length ; i++){
        if(companies_ACn[i].fakeId === selectedCompanyA_C.fakeId){
          companies_ACn[i] = selectedCompanyA_C;
        }
      }

      return updateObject(state, {
        selectedCompany: selectedCompanyA_C,
        companies: companies_ACn
      });
    case actionTypes.REMOVE_COMPETITION:
      return state;
    /*case actionTypes.EDIT_COMPETITION:
      const { companies } = state ;
      for(let i = 0 ; i < companies.length ; i++){
        if(companies[i].fakeId === action.editedCompany.fakeId){
          companies[i] = action.editedCompany;
        }
      }
      return updateObject(state, { selectedCompany: action.editedCompany, companies: companies });
    case actionTypes.GET_COMPETITIONS:
      return state;*/
    case actionTypes.GET_COMPETITION:
      return updateObject(state, { 
        selectedCompany: action.company,
        selectedCompetition: action.competition
      });
		default:
			return state;
	}
}

export default reducer;