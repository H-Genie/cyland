modal = (parameter) => {
    document
        .getElementsByClassName(`modal_0${parameter}`)[0]
        .classList.add("display_flex");

    if (
        document
            .getElementsByClassName(`modal_0${parameter}`)[0]
            .classList.contains("display_flex")
    ) {
        document
            .getElementsByClassName(`modal_0${parameter}`)[0]
            .addEventListener("click", (event) => {
                for (let i = 0; i < 6; i++) {
                    if (
                        event.target ==
                        event.currentTarget.querySelector(`.event_target${i}`)
                    )
                        return;
                }

                document
                    .getElementsByClassName(`modal_0${parameter}`)[0]
                    .classList.remove("display_flex");
            });
    }
};


newTabOpen = (pageNum, imgNum, fileExt) => {
    window.open(`/index/page3/modal_0${pageNum}_0${imgNum}.${fileExt}`);
}