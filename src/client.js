
import imageUrlBuilder from '@sanity/image-url';

const client={
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'v2023-07-22'
};
const builder=imageUrlBuilder(client);

export const generateURL=(query)=>{
    const {projectId,dataset,apiVersion}=client;
    query=encodeURIComponent(query);
    return `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;
}

export const urlFor=(source)=>builder.image(source);