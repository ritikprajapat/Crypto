import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";

function CryptoNewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: { q: "cryptocurrency", freshness: "Day", count: "20" },
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "7473eae622mshac5be071418e177p1b6db0jsn2c87a06af9f3",
        },
      };
      const response = await axios.request(options);
      setNews(response.data.value);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {news.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.url}>
            <Card>
              <CardActionArea
                onClick={() => window.open(article.url, "_blank")}
              >
                <CardMedia
                  component="img"
                  alt={article.name}
                  height="140"
                  image={
                    article.image?.thumbnail?.contentUrl ||
                    "https://via.placeholder.com/150"
                  }
                  title={article.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {article.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(article.url, "_blank")}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CryptoNewsPage;
