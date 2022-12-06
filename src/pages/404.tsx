import type { NextPage } from 'next'

const Page404:NextPage = () => (
  <h1>404</h1>
)

export default Page404


// import { GetServerSideProps } from 'next'

// export const getServerSideProps: GetServerSideProps<{ data: any }> = async (context) => {
//   const songListRes = await fetch(`https://www.chjk.cf/personalized?limit=10`)
//   const songListData = await songListRes.json()
//   if (!songListData || songListData.code != 200) {
//     return {
//       notFound: true,
//     }
//     // return {
//     //   redirect: {
//     //     destination: '/',
//     //     permanent: false,
//     //   },
//     // }
//   }

//   return { props: {
//     data:{
//       songList:songListData.result
//     }
//   } }
// }



// import { GetStaticProps } from 'next'
// export const getStaticProps: GetStaticProps = async (context) => {
// return {
//   redirect: {
//     destination: '/',
//     permanent: false,
//   },
// }
//   return {
//     props: {
//     },
//     revalidate: 10, // In seconds
//   }
// }