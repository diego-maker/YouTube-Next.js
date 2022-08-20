import React from "react";
import { Box, Grid } from "@material-ui/core";
import Layout from "../components/Layout/index";
import VideoCard from "src/components/Layout/VideoCrad";

export async function getStaticProps({data}) {
    const data = [

    ];
   
    return {
      props: {
        data:[],
      }, // will be passed to the page component as props
    }
  }

export default function Home({data}) {
  return (
    <Layout title="YouTube">
       <Box p={2}>
            <Grid container spacing={4}>
                {data.map((item) => (
                    <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12} > 
                        <VideoCard item={item} />
                    </Grid>
                ))}
            </Grid>
       </Box>
    </Layout>
  );
}
