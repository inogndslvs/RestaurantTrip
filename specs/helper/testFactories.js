import LikeBtnPresenter from '../../src/scripts/utils/like-button-initiator';

const createLikeBtnPresenterWithResto = async (resto) => {
  await LikeBtnPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeBtnPresenterWithResto };
