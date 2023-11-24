import styles from "../../style";
import {
  articlehero,
  articleimg,
  copyrightimg,
  sadimg,
  nounderstandimg,
  nointerestedimg,
  likeimg,
  angryimg,
} from "../../assets/index";
import { socialMedia } from "../../constants/index";
import { Tap, Button } from "../../components/index";
const Article = () => {
  const reviewBox = [
    { img: likeimg, text: "أحببته", num: "204" },
    { img: nounderstandimg, text: "لم افهم", num: "33" },
    { img: sadimg, text: "محزن", num: "6" },
    { img: nointerestedimg, text: "غير مهتم", num: "0" },
    { img: angryimg, text: " غاضب", num: "0" },
  ];

  return (
    // START ARTICLE PAGE
    <section id="article">
      <div
        className={`article-hero ${styles.flexCenter} py-[65px] bg-[var(--sec-color)]`}
      >
        <figure>
          <img src={articlehero} alt="articlehero" />
        </figure>
      </div>
      <div className="container">
        <div className="article-content">
          <div className="title border-b-[1px] border-[#E8E8E8]">
            <h1 className="text-[var(--paragraph-color)] text-[22px] font-black leading-[1.8] mt-[20px]">
              كيفية حماية الموقع من سرقة المحتوى و النسخ غير الشرعي
            </h1>
            <div
              className={`scoials-media ${styles.flex} justify-end gap-2 my-[15px]`}
            >
              {socialMedia.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    className={`${item.icon} bg-[var(--main-color)] hover:bg-[var(--paragraph-color)] text-[var(--white-color)] text-[14px] w-[33px] h-[33px] rounded-full ${styles.flexCenter} transition-all`}
                  ></a>
                );
              })}
            </div>
          </div>
          <div className="text-[#787878] text-[15px] font-semibold py-[7px]">
            16/11/2022
          </div>
          <div className="content">
            <p className="text-[#787878] text-[15px] font-semibold ">
              تم كتابة هذه المقالة لتناقش ثلاثة محاور مختلفة للمشكلة .
            </p>
            <div className="article-img">
              <figure>
                <img
                  src={articleimg}
                  alt="articleimg"
                  className="my-[30px] mx-auto"
                />
              </figure>
            </div>
            <div className="article-text">
              <h2 className="text-[18px] font-bold leading-[1.6]">
                كيف تحمي محتوى موقعك بحقوق الطبع والنشر
              </h2>
              <p className="text-[var(--paragraph-color)] text-[17px] font-semibold leading-[1.9] mt-[5px]">
                كما ستعرف أدناه ، هناك عدة طرق يمكنك استخدامها لتفعيل حقوق الطبع
                والنشر لمدونتك على ووردبريس، إلى جانب حماية المحتوى الخاص بك
                لتجنب أي انتهاك لحقوق الطبع والنشر لعملك الأصلي ستضيف كل خطوة من
                الخطوات أدناه مزيدًا من الحماية إلى موقع الويب الخاص بك. لست
                مضطرًا إلى تنفيذ كل واحدة منها، ولكن معظمها بسيط جدًا وسيحسن
                حماية حقوق الطبع والنشر الخاصة بك بشكل كبير. باتباع هذه
                الاقتراحات، ستتمكن من التعرف على كيفية الحفاظ على المحتوى الخاص
                بك محميًا .
              </p>
              <p className="text-[var(--text-color)] text-[17px] font-semibold leading-[1.9] mt-[20px]">
                عند تثبيت قالب ووردبريس ، ستلاحظ على الأرجح رمز حقوق الطبع
                والنشر أسفل مدونتك. تم تجهيز جميع القوالب تقريبًا بإشعار حقوق
                النشر. على سبيل المثال، إليك حقوق الطبع والنشر أسفل مدونة .
              </p>
              <img
                src={copyrightimg}
                alt="copyrightimg"
                className="my-[25px] mx-auto"
              />
              <p className="text-[var(--paragraph-color)] text-[17px] font-semibold leading-[1.9] mt-[5px]">
                ستتمكن من تغيير هذا إلى اسم مدونتك الخاصة ضمن إعدادات القالب
                الخاص بك، أو عن طريق ضبط التذييل نفسه يمكنك إبقاء رسالة حقوق
                النشر الخاصة بك بسيطة. كل ما تحتاجه حقًا هو رمز حقوق الطبع
                والنشر وتاريخ إنشاء موقع الويب الخاص بك أو العام الحالي واسمك أو
                اسم شركتك.
              </p>
              <h2 className="text-[17px] font-bold mt-[5px] leading-[1.9]">
                الطريقة الثانية :
              </h2>
              <p className="text-[var(--paragraph-color)] text-[17px] font-semibold leading-[1.9] mt-[5px]">
                نأمل أن تكون إضافة إشعار حقوق النشر التقليدي إلى مدونتك كافية
                لدرء معظم الأشخاص. ولكن، إذا كنت ترغب في اتخاذ خطوة إضافية
                للحماية وتوضيح استخدام المحتوى الخاص بك وإساءة استخدامه بمزيد من
                التفصيل، فإن إنشاء وإضافة صفحة شروط الاستخدام إلى موقعك يعد فكرة
                رائعة على الرغم من أن هذه الصفحات قد تبدو فنية بطبيعتها، إلا أن
                هناك مجموعة متنوعة من الأدوات التي يمكن أن تساعدك في إنشاء هذه
                الصفحات بسرعة إلى حد ما. <br />
                بالنسبة للمبتدئين ، لديك أدوات عبر الإنترنت مثل Termsfeedو Terms
                of Use Generator.باستخدام هذه ستدخل بعض المعلومات الأساسية وسيتم
                إنشاء صفحة شروط الخدمة تلقائيًا. بعد ذلك، ما عليك سوى نسخ هذا
                ولصقه في صفحة جديدة على موقع ووردبريس الخاص بك تسمى شروط الخدمة.
                عادة، سترغب في وضع رابط لهذه الصفحة في تذييل الموقع، بجوار إشعار
                حقوق النشر الخاص بك.
                <br />
                الخيار الآخر هو استخدام إضافات ووردبريس. واحدة من أبسطها تسمىWP
                AutoTerms. سيقوم هذا المكون الإضافي تلقائيًا بإنشاء أي شروط
                ضرورية للخدمة وصفحات سياسة الخصوصية. يمكنك بعد ذلك تضمين هذه
                الصفحات في موقعك من خلال استخدام رمز قصير .
              </p>
            </div>
            <div className="article-review">
              <h1 className="text-[var(--paragraph-color)] text-[21px] font-bold text-center mt-[65px]">
                ما مدى إعجابك بالمقالة
              </h1>
              <div
                className={`review-boxs grid grid-cols-2 sm:grid-cols-3 lg:${styles.flexBetween} justify-center gap-[50px] py-[50px] lg:py-[60px] px-[20px] lg:px-[100px] mt-[50px] bg-[#F9FAFC] rounded-[30px]`}
              >
                {reviewBox.map((item) => {
                  return (
                    <div
                      key={item.img}
                      className={`review-box ${styles.flexColumn} items-center gap-5`}
                    >
                      <figure>
                        <img src={item.img} alt={item.img} />
                      </figure>
                      <p className="text-[var(--text-color)] text-[14px] lg:text-[17px] font-bold">
                        {item.text}
                      </p>
                      <span className="text-[14px] lg:text-[15px] font-bold">
                        {item.num}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <Tap />
            <div className="article-comment">
              <h1 className="text-[var(--paragraph-color)] text-[21px] font-bold text-center mt-[65px]">
                اترك تعليقك
              </h1>
              <p className="text-[var(--text-color)] text-[16px] font-semibold text-center mt-[5px]">
                لن يتم نشر عنوان بريدك الإلكتروني
              </p>
              <form className={`w-[100%] lg:max-w-[500px] mt-[40px] mx-auto`}>
                <div className={`inputs ${styles.flex} gap-3`}>
                  <div className="input w-[100%]">
                    <label
                      htmlFor="user"
                      className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                    >
                      إسم المستخدم
                    </label>
                    <input
                      type="text"
                      name="user"
                      id="user"
                      placeholder="أكتب اسم المستخدم هنا"
                      className="placeholder:text-[#c4c3c3] text-[11px] bg-[#F9F9FB] border-[1px] border-[var(--sec-color)] focus:border-[var(--main-color)] w-[100%] py-[15px] px-[17px] rounded-[4px]"
                    />
                  </div>
                  <div className="input w-[100%]">
                    <label
                      htmlFor="email"
                      className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="أكتب بريدك الالكتروني هنا"
                      className="placeholder:text-[#c4c3c3] text-[11px] bg-[#F9F9FB] border-[1px] border-[var(--sec-color)] focus:border-[var(--main-color)] w-[100%] py-[15px] px-[17px] rounded-[4px]"
                    />
                  </div>
                </div>
                <label
                  htmlFor="message"
                  className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                >
                  الرسالة
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="text-[#c4c3c3] text-[11px] font-bold bg-[#f9fafc] border-[1px] border-[var(--sec-color)] focus:border-[var(--main-color)] w-[100%] py-[15px] px-[17px] rounded-[4px]"
                >
                  أكتب رسالتك هنا
                </textarea>
                <div className="btn text-center mt-[18px] w-[100%] sm:w-[500px]">
                  <Button
                    width="200px"
                    bg="var(--main-color)"
                    text="var(--white-color)"
                  >
                    نشر التعليق
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    // END ARTICLE PAGE
  );
};

export default Article;
