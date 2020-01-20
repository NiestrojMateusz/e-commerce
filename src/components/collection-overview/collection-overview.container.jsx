import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import { compose } from 'redux';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview';

const mapStateToPros = createStructuredSelector({
  isLoading: selectIsFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToPros),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
