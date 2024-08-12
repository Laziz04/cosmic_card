import { Box, Button, Typography, TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import frem from "../src/images/frem.png";
import chip from "../src/images/chip.png";
import fifma from "./images/fifma.png";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import card5 from "./images/card5.png";
import viza from "./images/visa.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Card qo'shildi");

const LayoutPage = () => {
  const [vizacard, mycards] = useState(false);
  const [cards, setCards] = useState([
    {
      cardNumber: "**** **** **** 2404",
      cardHolder: "Noman Manzoor",
      expiryDate: "02/30",
      img: card1,
    },
    {
      cardNumber: "**** **** **** 4335",
      cardHolder: "Noman Manzoor",
      expiryDate: "08/28",
      img: card2,
    },
    {
      cardNumber: "**** **** **** 3143",
      cardHolder: "Noman Manzoor",
      expiryDate: "08/40",
      img: card3,
    },
    {
      cardNumber: "**** **** **** 5389",
      cardHolder: "Noman Manzoor",
      expiryDate: "09/35",
      img: card5,
    },
  ]);

  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    img: "",
  });

  const Mycard = (isVizaCard: boolean) => {
    mycards(isVizaCard);
  };

  const addCards = () => {
    setCards([...cards, newCard]);
    setNewCard({ cardNumber: "", cardHolder: "", expiryDate: "", img: "" });
    mycards(false);
    notify();
  };

  const inputvaluesi = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        width: "100%",
        position: "relative",
      }}
    >
      <ToastContainer />
      <img
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "20px",
          left: "390px",
        }}
        src={frem}
        alt=""
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: { xs: "100%", md: "69%", lg: "51%" },
          marginTop: "50px",
        }}
      >
        <Box
          className={`card_box2 ${!vizacard ? "hover_box" : ""}`}
          sx={{
            borderRadius: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: !vizacard ? "#FFF" : "#834cff1a",
            border: !vizacard ? "1px solid #834cff" : "none",
            transition: "background-color 0.3s, border 0.3s",
          }}
          onClick={() => Mycard(false)}
        >
          <CiCreditCard1 />
          <Typography>New Credit Card</Typography>
        </Box>
        <Box
          className={`card_box2 ${vizacard ? "hover_box" : ""}`}
          sx={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: vizacard ? "#FFF" : "#834cff1a",
            border: vizacard ? "1px solid #834cff" : "none",
            transition: "background-color 0.3s, border 0.3s",
          }}
          onClick={() => Mycard(true)}
        >
          <CiCreditCard1 />
          <Typography>My Cards</Typography>
        </Box>
      </Box>
      {vizacard ? (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "1000px",
            marginTop: "20px",
            marginLeft: "37px",
            width: { xs: "90%", md: "70%", lg: "53%" },
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: "350px",
                maxWidth: "500px",
                height: "200px",
                borderRadius: "10px",
                backgroundImage: `url(${card1})`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginTop: "20px",
              }}
              className="hover_box"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "20px",
                  color: "#fff",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "40px",
                      height: "30px",
                    }}
                    src={chip}
                    alt=""
                  />
                  <Typography sx={{ fontSize: "20px" }}>
                    <img src={viza} alt="" />
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "23px" }}>
                    {card.cardNumber}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "10px" }}>
                      Card Holder Name
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {card.cardHolder}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "10px" }}>
                      Expiry Date
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {card.expiryDate}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          sx={{ width: { xs: "90%", md: "70%", lg: "50%" }, marginTop: "50px" }}
        >
          <div className="mt-5">
            <Typography
              sx={{
                fontSize: "30px",
                lineHeight: "32px",
                marginBottom: "10px",
                letterSpacing: "-0.02em",
              }}
            >
              Add New Card
            </Typography>
            <Typography className="text-slate-500">
              Do more with unlimited blocks, files, automations & integrations.
            </Typography>
          </div>
          <Box style={{ marginTop: "60px" }}>
            <label className="text-slate-500" htmlFor="cardHolder">
              Who is
            </label>
            <TextField
              id="cardHolder"
              name="cardHolder"
              value={newCard.cardHolder}
              onChange={inputvaluesi}
              className="newCard_input"
              fullWidth
              variant="outlined"
            />
            <div className="mt-5">
              <label className="text-slate-500" htmlFor="cardNumber">
                Payment Details
              </label>
              <div
                style={{
                  position: "relative",
                }}
              >
                <TextField
                  id="cardNumber"
                  name="cardNumber"
                  value={newCard.cardNumber}
                  onChange={inputvaluesi}
                  className="newCard_input"
                  fullWidth
                  variant="outlined"
                />

                <img
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "20px",
                    cursor: "pointer",
                  }}
                  src={fifma}
                  alt=""
                />
              </div>
              <TextField
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                name="expiryDate"
                value={newCard.expiryDate}
                onChange={inputvaluesi}
                className="newCard_input"
                fullWidth
                variant="outlined"
              />
              <select className="newCard_input">
                <option value="option1">United States</option>
              </select>
            </div>
          </Box>
          <Box className="mt-5 flex gap-5 items-center">
            <Button className="button_hover1">Cancel</Button>
            <Button className="button_hover" onClick={addCards}>
              Add
            </Button>
          </Box>
          <Typography
            sx={{
              fontSize: "13px",
              marginTop: "20px",
              marginBottom: "80px",
            }}
            className="text-slate-500"
          >
            By providing your card information, you allow us to charge your card
            for future payment in accordance with their terms.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LayoutPage;
