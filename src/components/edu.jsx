import "../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function edu() {
  return (
    <div className="text-center pt-20 pb-0 bg-slate-100 -z-50 " id="pendidikan">
      <h1 className="text-2xl md:text-3xl font-bold py-10">Pendidikan</h1>
      <VerticalTimeline className="mx-auto">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(14 116 144)", color: "#ffff" }}
          contentArrowStyle={{ borderRight: "5px solid  rgb(14 116 144)" }}
          iconStyle={{ background: "#040A18", color: "#040A18" }}
          icon={<WorkIcon />}
        >
          <h3 className="font-semibold text-lg">
            Institut Teknologi Kalimantan
          </h3>
          <p className="font-medium">Program Studi Informatika</p>
          <p>2023 - Sekarang</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#040A18", color: "#ffff" }}
          contentArrowStyle={{ borderRight: "5px solid  #040A18" }}
          iconStyle={{ background: "rgb(14 116 144)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="font-semibold text-lg">SMK Kartika V-1 Balikpapan</h3>
          <p className="font-medium">Teknik Komputer dan Jaringan</p>
          <p className="font-thin">2020 - 2023</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
