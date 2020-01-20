import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToPros = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer = compose(
  connect(mapStateToPros),
  WithSpinner,
)(CollectionPage);

export default CollectionsPageContainer;
