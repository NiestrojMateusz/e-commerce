import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.styles.scss';
import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selector';


const CollectionsOverview = ({collections}) => (
  <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})


export default connect(
  mapStateToProps,
)(CollectionsOverview);
