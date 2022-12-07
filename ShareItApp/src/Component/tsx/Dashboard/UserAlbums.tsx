import { FC } from "react";
import { Album } from "../../../Entities/Albums";
import Photo from "../../../Entities/Photo";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

interface Props {
  value: string;
  ownAlbums: Album[];
  photo: Photo[];
  handleChange(event: React.SyntheticEvent, newValue: string): void;
}

export const UserAlbums: FC<Props> = (Props) => {
  return (
    <div className="test-tabs">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={Props.value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              TabIndicatorProps={{
                style: { backgroundColor: "white", color: "red" },
              }}
              textColor="inherit"
              variant="scrollable"
              onChange={Props.handleChange}
              aria-label="Photo gallery"
            >
              {Props.ownAlbums?.map((album) => {
                return <Tab label={album.title} value={album.id} />;
              })}
            </TabList>
          </Box>
          <div className="photos d-flex justify-content-center flex-wrap">
            {Props.photo
              ?.filter((photo) => {
                return photo.albumId === Number(Props.value);
              })
              .map((ph: Photo) => {
                return (
                  <div className="photoItem">
                    <img src={ph.thumbnailUrl} alt={ph.id.toString()}></img>
                  </div>
                );
              })}
          </div>
        </TabContext>
      </Box>
    </div>
  );
};
