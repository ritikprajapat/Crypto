import { useEffect, useState } from "react";
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
    const fetchNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=2add6454cc4b437faa0119d10ae90237"
      );
      const data = await response.json();
      setNews(data.articles);
    };

    fetchNews();
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
                  alt={article.title}
                  height="140"
                  image={article.urlToImage}
                  title={article.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
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
