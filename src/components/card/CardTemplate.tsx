import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  productName?: string;
  productThumbnailUrl?: string;
  costPrice?: number;
  discountPrice?: number | string;
  discountRate?: number | string;
  isNew?: boolean | string;
  isBest?: boolean | string;
  isOnSale?: boolean | string;
}

const CardBox = styled.div<Props>`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.1);
  position: relative;
  padding: 40px 0;
  overflow: hidden;

  & img {
    width: 100%;
  }

  // New badge
  & .badge-box {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    padding: 12px;
    & .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background-color: white;
      border-radius: 4px;
      color: white;
      font-size: 12px;
      font-weight: 500;
      &.new-badge {
        background-color: rgba(255, 213, 24, 0.835);
      }
      &.best-badge {
        background-color: rgba(50, 203, 255, 0.7);
      }
      &.sale-badge {
        background-color: rgba(248, 95, 124, 0.7);
      }
      &:not(:first-of-type) {
        margin-left: 8px;
      }
    }
  }
  // Best badge
  // Discount badge
  // SimplePreview
  & .preview-box {
    position: absolute;
    bottom: -100%;
    left: 0;
    z-index: 3;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border: 1px solid white;
    border-radius: 4px 4px 12px 12px;
    box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.08);
    opacity: 0;

    transition: 0.4s;
    & .product-title {
      margin-bottom: 20px;
    }
    & .price-info {
      text-align: right;
      & > span:last-child {
        font-size: 20px;
        font-weight: 600;
      }
    }
    & .cost-price.line-through {
      font-size: 14px;
      text-decoration: line-through;
      margin-right: 12px;
    }
    & .button-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  // dimmed
  & .dimmed {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    box-sizing: border-box;
    border: 1px solid transparent;
    transition: 0.35s 0.08s;
    opacity: 0;
  }
  // hover
  &:hover {
    & .preview-box {
      bottom: 0;
      opacity: 1;
    }
    & .dimmed {
      opacity: 1;
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
`;

const slicingPrice = (price: number | string | undefined): void | any => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CardTemplate = ({
  children,
  productName,
  productThumbnailUrl,
  costPrice,
  discountPrice,
  discountRate,
  isNew,
  isBest,
  isOnSale,
}: Props) => {
  return (
    <CardBox>
      <div className="badge-box">
        {isNew && <div className="badge new-badge">NEW</div>}
        {isBest && <div className="badge best-badge">BEST</div>}
        {isOnSale && <div className="badge sale-badge">{discountRate}%</div>}
      </div>
      <img src={productThumbnailUrl} alt={productName} />
      <div className="preview-box">
        <p className="product-title">{productName}</p>
        <div className="price-info">
          {discountPrice ? (
            <>
              <span className="cost-price line-through">
                {slicingPrice(costPrice)}
              </span>
              <span className="discount-price">
                {slicingPrice(discountPrice)}
              </span>
            </>
          ) : (
            <span className="cost-price">{slicingPrice(costPrice)}</span>
          )}
        </div>
      </div>
      <div className="dimmed"></div>
    </CardBox>
  );
};

export default CardTemplate;
