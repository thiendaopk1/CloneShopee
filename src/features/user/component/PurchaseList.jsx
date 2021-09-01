import React from 'react';
import PropTypes from 'prop-types';
import PurchaseItem from './PurchaseItem';
PurchaseList.propTypes = {
  purchaseList: PropTypes.array,
  onSubmitComment: PropTypes.func,
  onClick: PropTypes.func,
};

PurchaseList.defaultProps = {
  purchaseList: [],
};
function PurchaseList({ purchaseList, onSubmitComment = null, onClick = null }) {
  const handleComment = async (list) => {
    if (onSubmitComment) {
      await onSubmitComment(list);
    }
  };

  const handleCancel = async (list) => {
    if (onClick) {
      await onClick(list);
    }
  };
  return (
    <div>
      {purchaseList.map((purchase) => (
        <div key={purchase.id}>
          <PurchaseItem purchase={purchase} onSubmitComment={handleComment} onClick={handleCancel} />;
        </div>
      ))}
    </div>
  );
}

export default PurchaseList;
