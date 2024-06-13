import "../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function edu() {
  return (
    <div className="text-center pt-20" id="pendidikan">
      <h1 className="text-3xl font-bold py-10">Pendidikan</h1>
      <VerticalTimeline className="-z-50 mx-auto">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "rgb(55, 65, 81)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - Sekarang"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="font-semibold">Institut Teknologi Kalimantan</h3>
          <h4 className="vertical-timeline-element-subtitle">Balikpapan</h4>
          <p>
            Jurusan Matematika dan Teknologi Informasi <br /> Program Studi Informatika
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="font-semibold">SMK Kartika V-1</h3>
          <h4 className="vertical-timeline-element-subtitle">Balikpapan</h4>
          <p>Teknik Komputer dan Jaringan
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
