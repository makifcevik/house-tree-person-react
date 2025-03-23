import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routes";

function HerosSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.SIGNUP);
  };

  useGSAP(() => {
    gsap.to(".anim-items-bottom", {
      opacity: 1,
      y: 20,
      delay: 0.3,
      duration: 1.5,
      stagger: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className='flex flex-center'>
      <div className='flex flex-col flex-center section-highlights gap-5 mt-12 max-md:mt-40'>
        <h1 className='anim-items-bottom section-header-sm'>{t("title")}</h1>
        <h3 className='anim-items-bottom text-gray mb-10'>{t("herosText")}</h3>
        <Button
          className='anim-items-bottom btn-primary rounded-3xl px-12 py-3'
          onClick={handleClick}
          label={t("btnText.getStarted")}
        />
      </div>
    </main>
  );
}

export default HerosSection;
