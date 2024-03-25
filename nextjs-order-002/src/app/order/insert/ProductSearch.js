import css from "@/css/order.insert.module.css";

const ProductSearch = ({ productList, setProductList }) => {
  const onClickHandler = () => {
    setProductList([]);
  };
  const viewList = productList.map((item) => (
    <li
      key={item.p_code}
      p_code={item.p_code}
      onClick={() => onClickHandler}
    >
      {item.p_code},{item.p_name}
    </li>
  ));

  return <ul className={css.cust_list}>{viewList}</ul>;
};

export default ProductSearch;
