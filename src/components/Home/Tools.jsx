import React from "react";

function Tools() {
  return (
    <div class="tools">
      <div class="tools__container">
        <div
          class="tools__item "
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/compress-image" title="Compress IMAGE">
            <div class="tools__item__icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill-rule="evenodd"
              >
                <path
                  d="M63.05 56h29.9c2.452 0 3.34.255 4.237.735a5 5 0 0 1 2.08 2.08c.48.897.733 1.785.733 4.235v29.9c0 2.452-.255 3.34-.735 4.237a5 5 0 0 1-2.08 2.08c-.897.48-1.785.733-4.235.733h-29.9c-2.452 0-3.34-.255-4.237-.735a5 5 0 0 1-2.08-2.08C56.253 96.288 56 95.4 56 92.95v-29.9c0-2.452.255-3.34.735-4.237a5 5 0 0 1 2.08-2.08c.897-.48 1.785-.733 4.235-.733zm0-56h29.9c2.452 0 3.34.255 4.237.735a5 5 0 0 1 2.08 2.08c.48.897.733 1.785.733 4.235v29.9c0 2.452-.255 3.34-.735 4.237a5 5 0 0 1-2.08 2.08c-.897.48-1.785.733-4.235.733h-29.9c-2.452 0-3.34-.255-4.237-.735a5 5 0 0 1-2.08-2.08C56.253 40.288 56 39.4 56 36.95V7.05c0-2.452.255-3.34.735-4.237a5 5 0 0 1 2.08-2.08C59.712.253 60.6 0 63.05 0zm-56 56h29.9c2.452 0 3.34.255 4.237.735a5 5 0 0 1 2.08 2.08c.48.897.733 1.785.733 4.235v29.9c0 2.452-.255 3.34-.735 4.237a5 5 0 0 1-2.08 2.08c-.897.48-1.785.733-4.235.733H7.05c-2.452 0-3.34-.255-4.237-.735a5 5 0 0 1-2.08-2.08C.253 96.288 0 95.4 0 92.95v-29.9c0-2.452.255-3.34.735-4.237a5 5 0 0 1 2.08-2.08C3.712 56.253 4.6 56 7.05 56zm0-56h29.9c2.452 0 3.34.255 4.237.735a5 5 0 0 1 2.08 2.08c.48.897.733 1.785.733 4.235v29.9c0 2.452-.255 3.34-.735 4.237a5 5 0 0 1-2.08 2.08c-.897.48-1.785.733-4.235.733H7.05c-2.452 0-3.34-.255-4.237-.735a5 5 0 0 1-2.08-2.08C.253 40.288 0 39.4 0 36.95V7.05C0 4.6.255 3.7.735 2.814s1.183-1.6 2.08-2.08S4.6 0 7.05 0z"
                  fill="#8FBC5D"
                ></path>
                <path
                  d="M70 83.602c0 .957.8 1.733 1.766 1.733s1.766-.777 1.766-1.733v-7.686l10.288 10.1a1.79 1.79 0 0 0 2.496 0 1.71 1.71 0 0 0 0-2.45l-10.288-10.1h7.828c.976 0 1.766-.776 1.766-1.733S84.833 70 83.856 70h-12.1a1.81 1.81 0 0 0-.674.133c-.43.175-.776.514-.954.937-.1.2-.136.436-.136.66L70 83.602zm14.602-52.77c.957 0 1.733-.8 1.733-1.766S85.56 27.3 84.602 27.3h-7.686l10.098-10.288a1.79 1.79 0 0 0 0-2.496 1.71 1.71 0 0 0-2.45 0l-10.098 10.3v-7.83c0-.977-.776-1.766-1.733-1.766S71 16 71 16.977v12.1a1.81 1.81 0 0 0 .133.674 1.75 1.75 0 0 0 .937.955 1.69 1.69 0 0 0 .661.136l11.87.002zM16.92 70c-.957 0-1.733.8-1.733 1.766s.776 1.766 1.733 1.766h7.686L14.508 83.82a1.79 1.79 0 0 0 0 2.497 1.71 1.71 0 0 0 2.45 0L27.056 76.03v7.828c0 .977.776 1.766 1.733 1.766s1.733-.8 1.733-1.766v-12.1c0-.23-.047-.46-.133-.673a1.75 1.75 0 0 0-.937-.955 1.69 1.69 0 0 0-.661-.136H16.92V70zm13.913-53.08c0-.957-.8-1.733-1.766-1.733s-1.766.777-1.766 1.733v7.686L17.014 14.508a1.79 1.79 0 0 0-2.496 0 1.71 1.71 0 0 0 0 2.45l10.288 10.098h-7.828c-.976 0-1.766.776-1.766 1.733s.8 1.733 1.766 1.733h12.1a1.81 1.81 0 0 0 .674-.133c.43-.175.776-.514.954-.937.1-.2.136-.436.136-.66l.002-11.87z"
                  fill-rule="nonzero"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h3>Compress IMAGE</h3>
            <div class="tools__item__content">
              <p>
                Compress <strong>JPG</strong>, <strong>PNG</strong>,{" "}
                <strong>SVG</strong>, and <strong>GIFs</strong> while saving
                space and maintaining quality.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/resize-image" title="Resize IMAGE">
            <div class="tools__item__icon">
              <svg viewBox="0 0 48 48" width="60" height="60" fill="none">
                <path
                  fill="#DCF2F9"
                  fill-rule="evenodd"
                  d="M25.68 38.4V26.64a4.32 4.32 0 0 0-4.32-4.32H9.6V6.153c0-2.14.223-2.915.641-3.697A4.361 4.361 0 0 1 12.056.64C12.838.223 13.614 0 15.753 0h26.094c2.14 0 2.915.223 3.697.641a4.362 4.362 0 0 1 1.815 1.815c.418.782.641 1.558.641 3.697v26.094c0 2.14-.223 2.915-.641 3.697a4.362 4.362 0 0 1-1.815 1.815c-.782.418-1.558.641-3.697.641H25.68Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#1C83A8"
                  d="M34.888 19.737a.831.831 0 0 0-.824-.839h-3.652L42.027 7.192a.85.85 0 0 0 0-1.186.812.812 0 0 0-1.164 0L29.247 17.712v-3.72a.831.831 0 0 0-.823-.84.831.831 0 0 0-.824.84v5.745a.86.86 0 0 0 .063.32.83.83 0 0 0 .76.519h5.641a.83.83 0 0 0 .824-.839Z"
                ></path>
                <path
                  fill="#3CB6E2"
                  fill-rule="evenodd"
                  d="M20.154 24H3.846c-1.337 0-1.822.14-2.311.4A2.726 2.726 0 0 0 .4 25.536c-.262.489-.401.974-.401 2.31v16.31c0 1.336.14 1.821.4 2.31.262.49.646.873 1.135 1.134.489.262.974.401 2.31.401h16.31c1.336 0 1.821-.14 2.31-.4a2.726 2.726 0 0 0 1.134-1.135c.262-.489.401-.974.401-2.31v-16.31c0-1.336-.14-1.821-.4-2.31a2.726 2.726 0 0 0-1.135-1.134c-.489-.262-.974-.401-2.31-.401ZM2.44 26.094c.24-.128.476-.174 1.406-.174h16.308c.93 0 1.166.046 1.406.174a.807.807 0 0 1 .346.346c.128.24.174.476.174 1.406v16.308c0 .93-.046 1.166-.174 1.406a.807.807 0 0 1-.346.346c-.24.128-.476.174-1.406.174H3.846c-.93 0-1.166-.046-1.406-.174a.807.807 0 0 1-.346-.346c-.128-.24-.174-.477-.174-1.406V27.846c0-.93.046-1.166.174-1.406a.807.807 0 0 1 .346-.346Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#3CB6E2"
                  fill-rule="evenodd"
                  d="M8.88 35.52a2.64 2.64 0 1 1 0-5.28 2.64 2.64 0 0 1 0 5.28ZM22.022 47.206c.42.418.282-6.006.703-6.424.42-.418.42-1.096 0-1.515l-5.384-5.353a1.08 1.08 0 0 0-1.522 0L2.982 46.584c-.42.418.573.204.994.622a1.08 1.08 0 0 0 1.523 0h16.523Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3>Resize IMAGE</h3>
            <div class="tools__item__content">
              <p>
                Define your dimensions, by percent or pixel, and resize your{" "}
                <strong>JPG</strong>, <strong>PNG</strong>, <strong>SVG</strong>
                , and <strong>GIF</strong> images.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/crop-image" title="Crop IMAGE">
            <div class="tools__item__icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill-rule="evenodd"
              >
                <path
                  d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z"
                  fill="#3CB6E2"
                ></path>
                <path
                  d="M44.718 39.818c.563-1.225.882-2.572.882-4.018a9.8 9.8 0 1 0-19.6 0 9.8 9.8 0 0 0 9.8 9.8c1.446 0 2.793-.32 4.018-.882L45.6 50.5l-5.782 5.782c-1.225-.563-2.572-.882-4.018-.882a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 9.8-9.8c0-1.446-.32-2.793-.882-4.018L50.5 55.4l17.15 17.15H75V70.1L44.718 39.818zM35.8 40.7a4.9 4.9 0 1 1 0-9.8 4.9 4.9 0 1 1 0 9.8zm0 29.4a4.9 4.9 0 0 1 0-9.8 4.9 4.9 0 1 1 0 9.8zm14.7-18.375a1.21 1.21 0 1 1 0-2.45 1.21 1.21 0 1 1 0 2.45zM67.65 28.45l-14.7 14.7 4.9 4.9L75 30.9v-2.45h-7.35z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h3>Crop IMAGE</h3>
            <div class="tools__item__content">
              <p>
                Crop <strong>JPG</strong>, <strong>PNG</strong>, or{" "}
                <strong>GIFs</strong> with ease; Choose pixels to define your
                rectangle or use our visual editor.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/convert-to-jpg" title="Convert to JPG">
            <div class="tools__item__icon">
              <svg viewBox="0 0 48 48" width="60" height="60" fill="none">
                <path
                  fill="#FFF3B6"
                  fill-rule="evenodd"
                  d="M26.159 0H4.992c-1.736 0-2.365.18-3 .52A3.538 3.538 0 0 0 .52 1.992c-.34.635-.52 1.264-.52 3v21.167c0 1.736.18 2.365.52 3 .34.634.837 1.132 1.472 1.471.635.34 1.264.52 3 .52h10.096v-9.198c0-2.387.249-3.252.716-4.125a4.865 4.865 0 0 1 2.023-2.023c.873-.467 1.738-.716 4.125-.716h9.198V4.992c0-1.736-.18-2.365-.52-3A3.539 3.539 0 0 0 29.16.52c-.635-.34-1.264-.52-3-.52Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#DAB400"
                  d="M13.451 7.04a.817.817 0 1 0-1.633 0v3.623l-4.76-4.76a.816.816 0 1 0-1.155 1.155l4.76 4.76H7.04a.817.817 0 1 0 0 1.633h5.593a.815.815 0 0 0 .816-.816V7.04h.001Z"
                ></path>
                <path
                  fill="#FFD400"
                  fill-rule="evenodd"
                  d="M21.841 16.85h21.167c1.736 0 2.365.18 3 .52.635.339 1.133.837 1.472 1.472.34.634.52 1.264.52 3v21.166c0 1.736-.18 2.365-.52 3a3.538 3.538 0 0 1-1.472 1.472c-.635.34-1.264.52-3 .52H21.841c-1.736 0-2.365-.18-3-.52a3.54 3.54 0 0 1-1.471-1.472c-.34-.635-.52-1.264-.52-3V21.841c0-1.736.18-2.365.52-3a3.538 3.538 0 0 1 1.471-1.471c.635-.34 1.264-.52 3-.52Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M26.748 29.314v4.512c0 1.6-.89 2.563-2.606 2.563-2.086 0-2.478-1.387-2.478-2.14 0-.645.296-1.058.826-1.058.625 0 .784.487.784 1.006 0 .498.233.858.847.858.572 0 .89-.424.89-1.25v-4.49c0-.52.339-.87.868-.87.53 0 .869.35.869.87Zm1.61 6.164V29.6c0-.773.402-1.016 1.016-1.016h2.659c1.461 0 2.637.72 2.637 2.414 0 1.388-.964 2.415-2.648 2.415h-1.928v2.065c0 .52-.339.869-.868.869-.53 0-.869-.35-.869-.869Zm1.736-5.56v2.16h1.62c.7 0 1.219-.423 1.219-1.08 0-.762-.54-1.08-1.398-1.08h-1.44Zm12.795 2.976v2.87a.577.577 0 0 1-.594.583c-.497 0-.635-.307-.74-.985-.499.625-1.187 1.027-2.267 1.027-2.69 0-3.718-1.853-3.718-3.993 0-2.573 1.61-3.992 3.972-3.992 1.927 0 2.955 1.154 2.955 1.832 0 .604-.445.762-.816.762-.858 0-.54-1.196-2.234-1.196-1.197 0-2.14.783-2.14 2.71 0 1.505.741 2.543 2.16 2.543.922 0 1.727-.625 1.812-1.557h-1.134c-.37 0-.783-.138-.783-.667 0-.424.243-.668.678-.668h2.139c.508 0 .71.255.71.731Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3>Convert to JPG</h3>
            <div class="tools__item__content">
              <p>
                Turn <b>PNG</b>, <b>GIF</b>, <b>TIF</b>, <b>PSD</b>, <b>SVG</b>,{" "}
                <b>WEBP</b>, <b>HEIC</b>, or <b>RAW</b> format images to JPG in
                bulk with ease.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/jpg-to-image" title="Convert from JPG">
            <div class="tools__item__icon">
              <svg viewBox="0 0 48 48" width="60" height="60" fill="none">
                <path
                  fill="#FFD400"
                  fill-rule="evenodd"
                  d="M21.942 48h21.086c1.729 0 2.356-.18 2.988-.518a3.524 3.524 0 0 0 1.466-1.466c.338-.632.518-1.26.518-2.988V21.942c0-1.729-.18-2.356-.518-2.988a3.524 3.524 0 0 0-1.466-1.466c-.632-.338-1.26-.518-2.988-.518H32.97v9.163c0 2.377-.248 3.24-.713 4.108a4.847 4.847 0 0 1-2.016 2.016c-.869.465-1.73.713-4.108.713H16.97v10.058c0 1.729.18 2.356.518 2.988a3.524 3.524 0 0 0 1.466 1.466c.632.338 1.26.518 2.988.518Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  d="M42.182 35.653a.84.84 0 0 0-.848-.832.84.84 0 0 0-.847.832v3.689l-4.939-4.847a.858.858 0 0 0-1.198 0 .82.82 0 0 0 0 1.176l4.938 4.847h-3.757a.84.84 0 0 0-.848.832c0 .46.38.832.848.832h5.803c.11 0 .22-.023.324-.064a.838.838 0 0 0 .523-.767v-5.698Z"
                ></path>
                <path
                  fill="#FFF3B6"
                  fill-rule="evenodd"
                  d="M4.977 0h21.105c1.73 0 2.358.18 2.99.519.633.338 1.13.834 1.468 1.467.339.633.519 1.26.519 2.991v21.105c0 1.73-.18 2.358-.519 2.99a3.528 3.528 0 0 1-1.467 1.468c-.633.339-1.26.519-2.991.519H4.977c-1.73 0-2.358-.18-2.99-.519a3.528 3.528 0 0 1-1.468-1.467C.18 28.44 0 27.813 0 26.082V4.977c0-1.73.18-2.358.519-2.99A3.528 3.528 0 0 1 1.986.518C2.62.18 3.246 0 4.977 0Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#DAB400"
                  fill-rule="evenodd"
                  d="M9.869 12.428v4.499c0 1.594-.887 2.555-2.598 2.555-2.08 0-2.47-1.383-2.47-2.133 0-.644.295-1.056.823-1.056.623 0 .781.486.781 1.003 0 .497.233.856.845.856.57 0 .887-.423.887-1.246v-4.478c0-.517.338-.866.866-.866s.866.349.866.866Zm1.605 6.146v-5.86c0-.772.401-1.014 1.014-1.014h2.65c1.458 0 2.63.718 2.63 2.407 0 1.384-.961 2.408-2.64 2.408h-1.922v2.06c0 .517-.338.865-.866.865s-.866-.349-.866-.866Zm1.732-5.544v2.154h1.616c.697 0 1.214-.422 1.214-1.077 0-.76-.538-1.077-1.394-1.077h-1.436Zm12.756 2.967v2.862c0 .317-.242.581-.59.581-.497 0-.634-.306-.74-.982-.496.623-1.183 1.024-2.26 1.024-2.682 0-3.706-1.848-3.706-3.98 0-2.567 1.605-3.982 3.96-3.982 1.921 0 2.946 1.151 2.946 1.827 0 .602-.444.76-.813.76-.856 0-.539-1.193-2.229-1.193-1.193 0-2.133.781-2.133 2.703 0 1.5.74 2.535 2.155 2.535.918 0 1.72-.623 1.805-1.553h-1.13c-.37 0-.78-.137-.78-.665 0-.422.242-.665.675-.665h2.133c.507 0 .707.253.707.728Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3>Convert from JPG</h3>
            <div class="tools__item__content">
              <p>
                Turn <b>JPG</b> images to <b>PNG</b> and <b>GIF</b>. Choose
                several <b>JPGs</b> to create an <b>animated GIF</b> in seconds!
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/photo-editor" title="Photo editor">
            <div class="tools__item__icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill-rule="nonzero"
              >
                <path
                  d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z"
                  fill="#AB6993"
                ></path>
                <g fill="#fff">
                  <path d="M20 82l5.544-21.956L58.59 27 75 43.41 41.956 76.456 20 82zm9.536-19.738L26.2 75.79l13.528-3.327L68.8 43.41 58.59 33.21 29.536 62.262z"></path>
                  <path d="M37.93 74c-1.286-5.357-5.57-9.643-10.93-10.93L28.07 59C34.93 60.714 40.286 66.07 42 72.93L37.93 74z"></path>
                  <path d="M63.863 35L67 38.135 38.137 67 35 63.87zM23 78l6-1.448c-.62-2.276-2.276-3.93-4.552-4.552L23 78zm53.2-36L60 25.635 66.57 19l1.095.22c7.886 1.106 14.02 7.298 15.114 15.26l.22 1.105L76.2 42zM66.133 25.635L76.2 35.808l1.97-2c-1.095-5.086-5.038-9.067-10.076-10.173l-1.97 2z"></path>
                </g>
              </svg>
            </div>
            <h3>Photo editor</h3>
            <div class="tools__item__content">
              <p>
                Spice up your pictures with text, effects, frames or stickers.
                Simple editing tools for your image needs.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/upscale-image" title="Upscale Image">
            <div class="tools__item__icon">
              <svg viewBox="0 0 48 48" width="60" height="60" fill="none">
                <path
                  fill="#8FBC5D"
                  fill-rule="evenodd"
                  d="M42.231 2H17.77c-.95 0-1.488.05-1.832.117a2.19 2.19 0 0 0-.692.248 2.09 2.09 0 0 0-.88.88c-.118.22-.19.397-.248.692-.066.344-.117.882-.117 1.832V30.23c0 .95.05 1.488.117 1.832.057.295.13.471.248.692.205.384.495.674.88.88.22.118.397.19.692.248.344.066.882.117 1.832.117H42.23c.95 0 1.488-.05 1.832-.117.295-.057.471-.13.692-.248a2.09 2.09 0 0 0 .88-.88c.118-.22.19-.397.248-.692.066-.344.117-.882.117-1.832V5.77c0-.95-.05-1.488-.117-1.832a2.188 2.188 0 0 0-.248-.692 2.09 2.09 0 0 0-.88-.88 2.19 2.19 0 0 0-.692-.248C43.719 2.051 43.18 2 42.23 2Zm0-2H17.77c-2.006 0-2.734.209-3.467.601a4.09 4.09 0 0 0-1.701 1.701C12.209 3.035 12 3.762 12 5.77V30.23c0 2.006.209 2.734.601 3.467a4.09 4.09 0 0 0 1.701 1.701c.733.392 1.46.601 3.467.601H42.23c2.006 0 2.734-.209 3.467-.601a4.09 4.09 0 0 0 1.701-1.701c.392-.733.601-1.46.601-3.467V5.77c0-2.006-.209-2.734-.601-3.467A4.09 4.09 0 0 0 45.698.601C44.965.209 44.238 0 42.23 0Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#E5F5D2"
                  fill-rule="evenodd"
                  d="M10 24v6.231c0 2.168.227 3.268.837 4.41a6.088 6.088 0 0 0 2.522 2.522c1.142.61 2.242.837 4.41.837H24v6.154c0 1.337-.14 1.822-.4 2.311a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H3.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 .4 46.464C.139 45.976 0 45.491 0 44.155v-16.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536 24.4c.489-.262.974-.401 2.31-.401H10Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#8FBC5D"
                  fill-rule="evenodd"
                  d="M45.5 34c.63.627.636-8.6 1.267-9.227a1.6 1.6 0 0 0 0-2.272l-8.075-8.03a1.621 1.621 0 0 0-2.284 0L16.5 34c-.63.627 1.513-.218 2.144.41.856.09 1.356.09 2.284 0h19.01L45.5 34Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#5F8C30"
                  d="M4.414 37a.839.839 0 1 0 0 1.678h3.721l-4.889 4.89a.838.838 0 1 0 1.186 1.186l4.89-4.89v3.721a.839.839 0 1 0 1.678 0V37.84a.846.846 0 0 0-.518-.774.83.83 0 0 0-.32-.064H4.414V37Z"
                ></path>
                <path
                  fill="#8FBC5D"
                  d="M24.23 16.875a.5.5 0 0 1-.147-.272 18.96 18.96 0 0 0-.312-1.796c-.104-.417-.271-.751-.5-.96-.23-.23-.563-.397-1-.522-.459-.125-1.084-.25-1.875-.397-.271-.063-.396-.209-.396-.438 0-.126.042-.21.104-.293a.489.489 0 0 1 .292-.146 21.57 21.57 0 0 0 1.875-.313c.458-.105.791-.272 1-.501.229-.23.396-.564.5-1.003a19.05 19.05 0 0 0 .312-1.837c.021-.272.167-.397.438-.397.25 0 .396.125.437.397.084.772.188 1.357.292 1.796.104.417.27.73.5.96.23.209.563.376 1.02.501.46.126 1.084.25 1.855.418.25.063.375.209.375.438 0 .251-.146.397-.438.439-.77.125-1.375.25-1.833.355-.437.104-.77.271-1 .501-.229.23-.396.543-.5.982a15.078 15.078 0 0 0-.291 1.816c-.042.272-.188.397-.438.397-.083-.02-.188-.042-.27-.125ZM34.26 10.796a20.839 20.839 0 0 0-.202-.974c-.055-.239-.147-.422-.276-.533-.11-.128-.293-.22-.55-.294-.24-.073-.589-.147-1.03-.257C32.074 8.72 32 8.628 32 8.5c0-.128.074-.22.22-.239.442-.092.79-.165 1.03-.239.22-.055.404-.147.532-.275.13-.129.203-.294.276-.533.055-.239.129-.57.22-.992 0-.147.093-.221.221-.221.129 0 .202.074.24.22.073.405.146.736.22.974.073.24.147.405.275.533.11.129.294.22.533.294.24.074.588.147 1.03.24.146.018.22.11.22.238 0 .129-.074.22-.22.24-.442.091-.79.165-1.03.238-.239.074-.422.165-.551.294-.11.129-.202.312-.276.551-.055.24-.128.57-.202.993-.018.147-.11.22-.239.22-.128-.037-.22-.11-.239-.239Z"
                ></path>
              </svg>
            </div>
            <h3>Upscale Image</h3>
            <div class="tools__item__content">
              <p>
                Enlarge your images with high resolution. Easily increase the
                size of your JPG and PNG images while maintaining visual
                quality.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/remove-background" title="Remove background">
            <div class="tools__item__icon">
              <svg viewBox="0 0 48 48" width="60" height="60" fill="none">
                <path
                  d="M0 40.32V7.68c0-2.671.25-3.673.835-4.591A4.914 4.914 0 0 1 3.089.835C4.09.334 5.009 0 7.68 0h32.64c2.671 0 3.673.25 4.591.835a4.914 4.914 0 0 1 2.254 2.254C47.666 4.09 48 5.009 48 7.68v32.64c0 2.671-.25 3.673-.835 4.591-.584.919-1.252 1.753-2.254 2.254-1.001.501-1.92.835-4.591.835H7.68c-2.671 0-3.673-.25-4.591-.835a4.914 4.914 0 0 1-2.254-2.254C.25 43.993 0 42.991 0 40.32Z"
                  fill="#8FBC5D"
                ></path>
                <path
                  fill="#5F8C30"
                  d="M24 39h-5v-5h5zM24 29h-5v-5h5zM24 19h-5v-5h5zM19 34h-5v-5h5zM19 24h-5v-5h5zM19 14h-5V9h5zM14 39h-1a4 4 0 0 1-4-4v-1h5v5ZM14 29H9v-5h5zM14 19H9v-5h5zM24 9h5v5h-5zM24 19h5v5h-5zM24 29h5v5h-5zM29 14h5v5h-5zM29 24h5v5h-5zM29 34h5v5h-5zM34 9h3a2 2 0 0 1 2 2v3h-5V9ZM34 19h5v5h-5zM34 29h5v5h-5z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.128 9.778h21.744c.844 0 1.323.045 1.628.104.263.05.42.115.615.22.342.183.6.44.783.783.105.196.17.352.22.615.059.305.104.784.104 1.628v14.195l-6.496-6.46a1.441 1.441 0 0 0-2.03 0l-17.66 17.324a4.933 4.933 0 0 1-.536-.069 1.949 1.949 0 0 1-.615-.22c-.342-.183-.6-.44-.783-.783a1.948 1.948 0 0 1-.22-.615c-.059-.305-.104-.784-.104-1.628V13.128c0-.844.045-1.323.104-1.628.05-.263.115-.42.22-.615.183-.342.44-.6.783-.783.196-.105.352-.17.615-.22.305-.059.784-.104 1.628-.104Zm0-1.778h21.744c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v21.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H13.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 0 1-1.512-1.512C8.186 37.302 8 36.655 8 34.872V13.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C10.698 8.186 11.345 8 13.128 8Z"
                  fill="#E5F5D2"
                ></path>
                <path
                  d="M14 18.094a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                  fill="#E5F5D2"
                ></path>
              </svg>
            </div>
            <h3>Remove background</h3>
            <div class="tools__item__content">
              <p>
                Quickly remove image backgrounds with high accuracy. Instantly
                detect objects and cut out backgrounds with ease.{" "}
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/watermark-image" title="Watermark IMAGE">
            <div class="tools__item__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clip-path="url(#a)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.692 0h32.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623v32.616c0 2.675-.279 3.645-.801 4.623a5.452 5.452 0 0 1-2.268 2.268c-.978.523-1.948.801-4.623.801H7.692c-2.675 0-3.645-.279-4.623-.801A5.452 5.452 0 0 1 .801 44.93C.278 43.953 0 42.983 0 40.308V7.692c0-2.675.278-3.645.801-4.623A5.452 5.452 0 0 1 3.07.801C4.047.278 5.017 0 7.692 0Z"
                    fill="#4A7AAB"
                  ></path>
                  <path
                    d="M21.797 21.623c0 .825-1.05 2.9-2.024 4.479a.648.648 0 0 0-.076.503.61.61 0 0 0 .586.45h7.435c.23 0 .44-.132.543-.34a.625.625 0 0 0-.055-.647c-1.386-1.891-2.003-3.262-2.003-4.445 0-1.183.617-2.554 2.009-4.455a5.279 5.279 0 0 0 .973-3.066c0-2.9-2.326-5.26-5.185-5.26-2.86 0-5.185 2.36-5.185 5.26 0 1.107.336 2.167.979 3.075 1.385 1.892 2.003 3.263 2.003 4.446ZM35.253 27.916H12.746a.613.613 0 0 0-.608.618v6.207c0 .34.272.617.608.617h22.507a.613.613 0 0 0 .609-.617v-6.207a.613.613 0 0 0-.609-.617ZM31.81 36.263H16.19a.613.613 0 0 0-.609.618v.7c0 .34.273.617.61.617h15.62a.613.613 0 0 0 .608-.617v-.7a.614.614 0 0 0-.609-.618Z"
                    fill="#fff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3>Watermark IMAGE</h3>
            <div class="tools__item__content">
              <p>
                Stamp an image or text over your images in seconds. Choose the
                typography, transparency and position.
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/meme-generator" title="Meme generator">
            <div class="tools__item__icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill-rule="nonzero"
              >
                <path
                  d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z"
                  fill="#AB6993"
                ></path>
                <path
                  d="M49.5 82C32.103 82 18 68.12 18 51s14.103-31 31.5-31S81 33.88 81 51 66.897 82 49.5 82zm-.468-6.477C68.574 75.523 77.37 58 66.532 58h-35c-10.47 0-2.042 17.523 17.5 17.523zM58.445 42c-.015 0-.03 0-.045.001-2.373.046-4.678 1.908-7.004 5.45-.303.462-.627 1.278-.165 1.58s.967-.18 2.335-1.06c2.467-1.586 3.546-2.5 4.88-2.472s2.582.994 4.88 2.472c1.368.88 1.873 1.364 2.335 1.06s.138-1.12-.165-1.58c-2.326-3.542-4.63-5.404-7.004-5.45h-.045zm-18 0c-.015 0-.03 0-.045.001-2.373.046-4.678 1.908-7.004 5.45-.303.462-.627 1.278-.165 1.58s.967-.18 2.335-1.06c2.467-1.586 3.546-2.5 4.88-2.472s2.582.994 4.88 2.472c1.368.88 1.873 1.364 2.335 1.06s.138-1.12-.165-1.58c-2.326-3.542-4.63-5.404-7.004-5.45h-.045zm8.48 32c.886 0 9.394-.574 9.394-1.678S52.8 70 48.924 70 40 71.217 40 72.322 48.038 74 48.924 74z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h3>Meme generator</h3>
            <div class="tools__item__content">
              <p>
                Create your memes online with ease. Caption meme images or
                upload your pictures to make custom memes.
              </p>
            </div>
          </a>
        </div>

        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/rotate-image" title="Rotate IMAGE">
            <div class="tools__item__icon">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <path
                  d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z"
                  fill="#3CB6E2"
                ></path>
                <g transform="translate(26 24)">
                  <mask id="A" fill="#fff"></mask>
                  <path
                    d="M-14.927 62.634h77.883V-24.27h-77.883z"
                    mask="url(#A)"
                    stroke="#1D1D1B"
                    stroke-width="9"
                  ></path>
                </g>
                <g fill="#fff">
                  <path
                    d="M46.732 26.52a2.5 2.5 0 1 1 .636 4.959C36.664 32.852 28.5 41.905 28.5 52.756c0 8.813 5.385 16.57 13.453 19.853a2.5 2.5 0 1 1-1.885 4.631C30.143 73.2 23.5 63.632 23.5 52.756c0-13.393 10.058-24.546 23.232-26.235zm29.555 22.875a2.5 2.5 0 1 1-4.95.707c-.322-2.257-.92-4.356-1.8-6.327a2.5 2.5 0 1 1 4.556-2.059c1.09 2.4 1.816 4.964 2.204 7.68zm-22.87 29.59a2.5 2.5 0 1 1-.707-4.95c2.2-.314 4.25-.9 6.178-1.743a2.5 2.5 0 1 1 2.025 4.572c-2.356 1.044-4.85 1.744-7.496 2.122zM71 69a2.5 2.5 0 1 1-4-3c1.436-1.914 2.525-3.823 3.255-5.73a2.5 2.5 0 1 1 4.67 1.786C74.02 64.41 72.703 66.72 71 69z"
                    fill-rule="nonzero"
                  ></path>
                  <path d="M48.563 42C47.708 42 47 41.292 47 40.438V18.563c0-.854.708-1.562 1.563-1.562.415 0 .806.17 1.1.464L60.6 28.4c.293.293.464.684.464 1.1s-.17.806-.464 1.1L49.66 41.536c-.293.293-.684.464-1.1.464z"></path>
                </g>
              </svg>
            </div>
            <h3>Rotate IMAGE</h3>
            <div class="tools__item__content">
              <p>
                Rotate many images <strong>JPG</strong>, <strong>PNG</strong> or{" "}
                <strong>GIF</strong> at same time. Choose to rotate only
                landscape or portrait images!
              </p>
            </div>
          </a>
        </div>
        <div
          class="tools__item"
          style={{ minHeight: "300px", minWidth: "450px" }}
        >
          <a href="/html-to-image" title="HTML to IMAGE">
            <div class="tools__item__icon">
              <svg viewBox="0 0 48 48" width="60" height="60" fill="none">
                <g clip-path="url(#a)">
                  <path
                    fill="#FFD400"
                    fill-rule="evenodd"
                    d="M21.942 48h21.086c1.729 0 2.356-.18 2.988-.518a3.524 3.524 0 0 0 1.466-1.466c.338-.632.518-1.26.518-2.988V21.942c0-1.729-.18-2.356-.518-2.988a3.524 3.524 0 0 0-1.466-1.466c-.632-.338-1.26-.518-2.988-.518H32.97v9.163c0 2.377-.248 3.24-.713 4.108a4.846 4.846 0 0 1-2.016 2.016c-.869.465-1.731.713-4.108.713H16.97v10.058c0 1.729.18 2.356.518 2.988a3.524 3.524 0 0 0 1.466 1.466c.632.338 1.26.518 2.988.518Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    d="M42.182 35.653a.84.84 0 0 0-.848-.832.84.84 0 0 0-.847.832v3.689l-4.939-4.847a.858.858 0 0 0-1.198 0 .82.82 0 0 0 0 1.176l4.938 4.847h-3.757a.84.84 0 0 0-.848.832c0 .46.38.832.848.832h5.803c.11 0 .22-.023.324-.064a.838.838 0 0 0 .523-.767v-5.698Z"
                  ></path>
                  <path
                    fill="#FFF3B6"
                    fill-rule="evenodd"
                    d="M4.972 0h21.086c1.729 0 2.356.18 2.988.518a3.524 3.524 0 0 1 1.466 1.466c.338.632.518 1.26.518 2.988v21.086c0 1.729-.18 2.356-.518 2.988a3.524 3.524 0 0 1-1.466 1.466c-.632.338-1.26.518-2.988.518H4.972c-1.729 0-2.356-.18-2.988-.518a3.524 3.524 0 0 1-1.466-1.466C.18 28.414 0 27.786 0 26.058V4.972c0-1.729.18-2.356.518-2.988A3.524 3.524 0 0 1 1.984.518C2.616.18 3.244 0 4.972 0Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#DAB400"
                    fill-rule="evenodd"
                    d="M3.093 12.783v5.308c0 .447.292.748.748.748s.748-.301.748-.748V15.9h2.718v2.19c0 .447.291.748.747.748s.748-.301.748-.748v-5.308c0-.447-.292-.748-.748-.748s-.747.301-.747.748v1.86H4.589v-1.86c0-.447-.292-.748-.748-.748s-.748.301-.748.748Zm8.7.63v4.678c0 .447.293.748.748.748.457 0 .748-.301.748-.748v-4.679h1.414c.429 0 .775-.219.775-.63 0-.41-.346-.628-.775-.628H10.38c-.429 0-.775.219-.775.629 0 .41.346.63.775.63h1.414Zm4.46 4.696v-5.335c0-.602.41-.739.812-.739h.438c.465 0 .684.182.839.684l1.304 4.214h.018l1.286-4.214c.155-.502.374-.684.84-.684h.419c.4 0 .811.137.811.739v5.335c0 .374-.182.73-.665.73-.484 0-.666-.356-.666-.73v-4.068h-.018l-1.396 4.36c-.1.31-.328.438-.638.438s-.538-.128-.639-.438l-1.395-4.36h-.018v4.068c0 .374-.183.73-.666.73-.483 0-.666-.356-.666-.73Zm8.126-5.326v5.062c0 .665.347.875.876.875h3.119c.428 0 .775-.219.775-.63 0-.41-.347-.629-.775-.629h-2.5v-4.678c0-.447-.29-.748-.747-.748-.456 0-.748.301-.748.748Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3>HTML to IMAGE</h3>
            <div class="tools__item__content">
              <p>
                Convert webpages in HTML to JPG or SVG. Copy and paste the URL
                of the page you want and convert it to IMAGE with a click.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tools;
