// This file uses the Static data API to map and display

// import {View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import ProductListContain from './productListContain';
// import {smartWatchesData} from './../data/smartWatchesData';
// import {ScrollView} from 'react-native-gesture-handler';
// import {tabletsData} from './../data/tabletsData';
// import {LaptopData} from './../data/laptopData';
// import {monitorData} from './../data/monitorData';

// const ProductList = ({navigation, route}) => {
//   // const id = route.params?.productId;
//   // console.log('id:', id);
//   // let selectedProduct;
//   // if (id === 0) {
//   //   const selectedProduct = smartWatchesData.find(element => {
//   //     console.log(element);
//   //     return id === element.id;
//   //   });
//   // } else if (id === 1) {
//   //   const selectedProduct = tabletsData.find(element => {
//   //     console.log(element);
//   //     return id === element.id;
//   //   });
//   // } else if (id === 2) {
//   //   const selectedProduct = LaptopData.find(element => {
//   //     console.log(element);
//   //     return id === element.id;
//   //   });
//   // }

//   // const goToProductDetails = item => {
//   //   console.log(item);
//   //   navigation.navigate('ProductDetails', {productId: item});
//   // };

//   // const goToProductDetailsTablet = itemTablets => {
//   //   console.log(itemTablets);
//   //   navigation.navigate('ProductDetailsTablets', {tabletId: itemTablets});
//   // };

//   // const goToProductDetailsLaptop = itemLaptop => {
//   //   console.log(itemLaptop);
//   //   navigation.navigate('ProductDetailsLaptop', {laptopId: itemLaptop});
//   // };

//   // const goToProductDetailsMonitor = itemMonitor => {
//   //   console.log(itemMonitor);
//   //   navigation.navigate('ProductDetailsMonitor', {MonitorId: itemMonitor});
//   // };

//   const sendCred = (id) => {
//     fetch('http://10.0.2.2:3000/ecommerce/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         _id: id
//       }),
//     })
//       .then(Response => Response.json())
//       .then(data => {
//         console.log(data);
//       });
//   };

//   return (
//     <ScrollView>
//       <View>
//         {id === 0 && (
//           <View>
//             {smartWatchesData.map(item => (
//               <TouchableOpacity onPress={() => goToProductDetails(item.id)}>
//                 <ProductListContain
//                   key={item.id}
//                   title={item.title}
//                   price={item.price}
//                   img={item.img}
//                   rating={item.rating}
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         {/* {id === 1 && (
//           <View>
//             {tabletsData.map(itemTablets => (
//               <TouchableOpacity
//                 onPress={() => goToProductDetailsTablet(itemTablets.id)}>
//                 <ProductListContain
//                   key={itemTablets.id}
//                   title={itemTablets.title}
//                   price={itemTablets.price}
//                   img={itemTablets.img}
//                   rating={itemTablets.rating}
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         {id === 2 && (
//           <View>
//             {LaptopData.map(itemLaptop => (
//               <TouchableOpacity
//                 onPress={() => goToProductDetailsLaptop(itemLaptop.id)}>
//                 <ProductListContain
//                   key={itemLaptop.id}
//                   title={itemLaptop.title}
//                   price={itemLaptop.price}
//                   img={itemLaptop.img}
//                   rating={itemLaptop.rating}
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         {id === 3 && (
//           <View>
//             {monitorData.map(itemMonitor => (
//               <TouchableOpacity
//                 onPress={() => goToProductDetailsMonitor(itemMonitor.id)}>
//                 <ProductListContain
//                   key={itemMonitor.id}
//                   title={itemMonitor.title}
//                   price={itemMonitor.price}
//                   img={itemMonitor.img}
//                   rating={itemMonitor.rating}
//                 />
//               </TouchableOpacity>
//             ))}
//           </View>
//         )} */}
//       </View>
//     </ScrollView>
//   );
// };

// export default ProductList;

// This file use the Backend Node(Js) to map the data and display the Data using the Axios
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView, Text} from 'react-native';
import ProductListContain from './productListContain';
import axios from 'axios';

const ProductList = ({navigation, route}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // add error state
console.log("",products);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/ecommerce/productDetails')
      .then(response => {
        console.log(response.data); // check response data
        if (Array.isArray(response.data.result)) {
          // verify that response data is an array
          setProducts(response.data.result);
          setIsLoading(false);
        } else {
          setError('Response data is not an array.');
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setError(error.message); // set error state with error message
        setIsLoading(false);
      });
  }, []);

  const goToProductDetails = item => {
    navigation.navigate('ProductDetails', {productId: item._id});
  };

  return (
    <ScrollView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text> // show error message if error state is not null
      ) : (
        products.map(item => (
          <TouchableOpacity
            key={item._id}
            onPress={() => goToProductDetails(item)}>
            <ProductListContain
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default ProductList;
