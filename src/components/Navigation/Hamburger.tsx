import styles from "./Hamburger.module.scss";
import { MenuSvg } from "../../assets/svgs/MenuSvg";
import { Fragment, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { MenuItem } from "./Navigation";
import { UpSvg } from "../../assets/svgs/UpSvg";
import { DownSvg } from "../../assets/svgs/DownSvg";
import { KoreaSvg } from "../../assets/svgs/KoreaSvg";
import { AmericaSvg } from "../../assets/svgs/AmericaSvg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { XMarkSvg } from "../../assets/svgs/XMarkSvg";

type Props = {
  menuItems: MenuItem[];
};

export const Hamburger = ({ menuItems }: Props) => {
  const [open, setOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(-1);
  const [openLang, setOpenLang] = useState(false);
  const doNavigate = useNavigate();
  const { pathname } = useLocation();
  const [sp] = useSearchParams();
  const lang = sp.get("lang");

  const navigate = (to: string) => {
    let destination = to;
    if (lang === "eng") {
      destination = destination + "?lang=eng";
    }
    doNavigate(destination);
  };

  const handleClick = (idx: number) => {
    const newIdx = openIdx === idx ? -1 : idx;
    setOpenIdx(newIdx);
  };
  return (
    <>
      <div
        className={styles.menuToggle}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuSvg />
      </div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <ListItemButton
            onClick={() => setOpen(false)}
            style={{ justifyContent: "end" }}
          >
            <div className={styles.svgBox}>
              <XMarkSvg />
            </div>
          </ListItemButton>
          <Divider />
          <List>
            <ListItemButton
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
              selected={pathname === "/"}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
            {menuItems.map((item, i) => {
              return item.subMenu ? (
                <Fragment key={item.to}>
                  <ListItemButton onClick={() => handleClick(i)}>
                    <ListItemText primary={item.text} />
                    <div className={styles.svgBox}>
                      {openIdx === i ? <UpSvg /> : <DownSvg />}
                    </div>
                  </ListItemButton>
                  <Collapse in={openIdx === i} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subMenu.map((sub) => (
                        <ListItemButton
                          sx={{ pl: 4 }}
                          key={sub.to}
                          selected={pathname === sub.to}
                          onClick={() => {
                            navigate(sub.to);
                            setOpen(false);
                          }}
                        >
                          <ListItemText primary={sub.text} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Fragment>
              ) : (
                <ListItemButton
                  key={item.to}
                  onClick={() => {
                    navigate(item.to);
                    setOpen(false);
                  }}
                  selected={pathname === item.to}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              );
            })}
          </List>
          <Divider />
          <ListItemButton onClick={() => setOpenLang(!openLang)}>
            <div className={styles.svgBox}>
              <KoreaSvg />
            </div>
            <ListItemText primary="Korean" sx={{ pl: 2 }} />
            <div className={styles.svgBox}>
              {openLang ? <UpSvg /> : <DownSvg />}
            </div>
          </ListItemButton>
          <Collapse in={openLang} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  setOpenLang(false);
                }}
              >
                <div className={styles.svgBox}>
                  <KoreaSvg />
                </div>
                <ListItemText primary="Korean" sx={{ pl: 2 }} />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  setOpenLang(false);
                }}
              >
                <div className={styles.svgBox}>
                  <AmericaSvg />
                </div>
                <ListItemText primary="English" sx={{ pl: 2 }} />
              </ListItemButton>
            </List>
          </Collapse>
        </Box>
      </Drawer>
    </>
  );
};
