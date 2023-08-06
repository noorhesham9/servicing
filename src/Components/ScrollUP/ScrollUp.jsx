import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
function ScrollUp() {
  const [scrollToTop, setscrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setscrollToTop(true);
      } else {
        setscrollToTop(false);
      }
    });
  }, []);

  const ScrollUpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className="scroll-up">
      {scrollToTop && (
        <div className="scroll-up" onClick={ScrollUpToTop}>
          <IconButton>
            <ArrowUpwardIcon />
          </IconButton>
        </div>
      )}
    </Box>
  );
}

export default ScrollUp;
