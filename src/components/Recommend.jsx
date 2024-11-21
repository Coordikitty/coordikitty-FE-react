import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ClosetModal from "./Closet/ClosetModal";
import styleInfo from "../utils/styleInfo";
import recommendApi from "../apis/recommendApi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Swiper.css";

const STYLE = "STYLE";

const Recommend = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rcdClothes, setRcdClothes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  /*
  const [lv1, SetLv1] = useState(STYLE)
  const [lv2, SetLv2] = useState('')
  const handleLv1 = e => {
    SetLv2('')
    SetLv1(e.target.value)
  }
  const handleLv2 = e => {
    SetLv2(e.target.value)
    setLoading(true)
  }
  */

  useEffect(() => {
    if (category) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        // 위치 제공 동의 시
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          try {
            const res = await recommendApi("STYLE", category, lat, lon);
            console.log("recommendApi res : ", res);
            if (res) {
              setRcdClothes(Object.values(res[0]));
            } else {
              alert("적합한 옷이 없습니다. 옷을 더 추가해 주세요");
              setRcdClothes([]);
            }
          } catch (e) {
            console.error(e);
            alert("옷 추천에 실패하였습니다.");
          } finally {
            setLoading(false);
          }
        },
        // 위치 제공 거부 시
        async () => {
          try {
            const res = await recommendApi("STYLE", category, 37.541, 126.986);
            console.log("recommendApi res : ", res);
            if (res) {
              setRcdClothes(Object.values(res[0]));
            } else {
              alert("적합한 옷이 없습니다. 옷을 더 추가해 주세요");
              setRcdClothes([]);
            }
          } catch (e) {
            console.error(e);
            alert("옷 추천에 실패하였습니다.");
          } finally {
            setLoading(false);
          }
        }
      );
    }
  }, [category]);

  return (
    <React.Fragment>
      <Box marginTop={"2rem"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h1">오늘의 추천</Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{ width: "20%" }}
            onClick={handleModalOpen}
          >
            옷장 열기
          </Button>
          <ClosetModal
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
          ></ClosetModal>
        </Stack>
        <Stack direction={"row"} spacing={2} marginTop={"2rem"}>
          <FormControl fullWidth>
            <InputLabel id="recomned-lv2-select-label">추천 유형</InputLabel>
            <Select
              id="recomned-lv2-select"
              labelId="recomned-lv2-select-label"
              label="세부 추천 유형"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={loading}
            >
              {styleInfo.map((el) => {
                return (
                  <MenuItem key={el.style} value={el.style}>
                    {el.kr}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {/* Recommend List */}
      {loading && (
        <Box width={"100%"} padding={"15rem 0"} textAlign={"center"}>
          <CircularProgress
            size={"10rem"}
            thickness={5}
            color="secondary"
          ></CircularProgress>
        </Box>
      )}

      {!loading && Boolean(!rcdClothes.length) && (
        <Box width={"100%"} padding={"15rem 0"} textAlign={"center"}>
          <Typography variant="h1">추천 유형을 선택해 주세요!!!</Typography>
        </Box>
      )}

      {Boolean(rcdClothes.length) && !loading && (
        <Box
          sx={{
            position: "absolute",
            left: "0",
            width: "100vw",
            height: "40rem",
          }}
        >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            {rcdClothes.map((clothes) => {
              return (
                <SwiperSlide key={clothes}>
                  <img src={clothes} alt={clothes}></img>
                </SwiperSlide>
              );
            })}

            <div className="slider-controler">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Recommend;
