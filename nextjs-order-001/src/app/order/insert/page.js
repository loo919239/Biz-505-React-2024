"use client";
import { SelectAll2 } from "@/app/api/order";
import { useEffect, useState } from "react";
import css from "@/css/insert.module.css";

const OrderInsert = () => {
  const [customerList, setCustomerList] = useState();

  useEffect(() => {
    const getCustomerList = async () => {
      const result = await SelectAll2();
      setCustomerList([...result]);
    };
    getCustomerList();
  }, []);

  // const viewList = customerList.map((customer) => (
  //   <li key={customer.c_code}>{customer.c_code}</li>
  // ));

  return (
    <section className={css.main}>
      <h1>주문서 입력</h1>
      <form>
        <div>
          <input placeholder="고객코드" />
          <button>검색</button>
          {/* <ul className={css.list}>{viewList}</ul> */}
          <ul>
            <li>고객코드:C0020</li>
            <li>고객명:혼길동</li>
            <li>연락처:010-1111-1111</li>
          </ul>
        </div>
        <div>
          <div>
            <input placeholder="상품코드" />
            <button>검색</button>
          </div>
          <div>
            <input placeholder="주문수량" />
            <button>추가</button>
          </div>
        </div>
      </form>
      <div>
        <h3>상품리스트</h3>
        <table className={css.table}>
          <tr className={css.tr}>
            <td>상품코드</td>
            <td>상품명</td>
            <td>주문수량</td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <ul>
          <li>P0010</li>
        </ul>
      </div>
    </section>
  );
};
export default OrderInsert;
