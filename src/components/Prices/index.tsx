import { PricesList } from 'interface/prices';
import { getPricesApi } from 'api/url';
import { useEffect, useState } from 'react';

function Prices() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PricesList[]>([]);

  const getPrices = async () => {
    try {
      setData(await getPricesApi());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrices();
  }, []);

  return (
    <div className='page-prices'>
      <ol className='list-price'>
        {loading
          ? 'loading'
          : data.map((item) => {
              return (
                <li className='list-item' key={item.id}>
                  {item.name}
                </li>
              );
            })}
      </ol>
    </div>
  );
}

export default Prices;
