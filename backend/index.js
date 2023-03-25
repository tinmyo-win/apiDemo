const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());

app.get('/news', (req, res) => {
  return res.json({
    category: 'News',
    body: "The former Prime Minister of Pakistan, Imran Khan, \
        is answering charges of corruption, which he dismisses as politically motivated, \
        at a court in Islamabad \
        A warrant for his arrest was suspended on Friday on the condition that he appear at court. \
        He was accompanied by armed security as he left his home in Lahore, which was raided \
        by police after he left. \
        The BBC's Caroline Davies travelled with Mr Khan. \
      ",
    image_url: "../backend/images/image.png",
  })
})

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));