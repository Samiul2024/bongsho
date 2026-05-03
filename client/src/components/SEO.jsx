import React from "react";

import { Helmet } from "react-helmet-async";

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
}) => {

    return (

        <Helmet>

            {/* TITLE */}
            <title>
                {title}
            </title>



            {/* BASIC SEO */}
            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="author"
                content="Omar Faruk"
            />



            {/* OPEN GRAPH */}
            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:url"
                content={url}
            />

            <meta
                property="og:type"
                content="website"
            />



            {/* TWITTER */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />



            {/* CANONICAL */}
            <link
                rel="canonical"
                href={url}
            />

        </Helmet>
    );
};

export default SEO;