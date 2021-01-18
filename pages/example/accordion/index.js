import React from "react";
import Dashboard from "../../../components/Dashboard";

const AccordionExample = (props) => {
  React.useEffect(() => {
    const labels = document.querySelectorAll(".accordion-design-item__label");
    const tabs = document.querySelectorAll(".accordion-design-tab");

    function toggleShow() {
      const target = this;
      const item = target.classList.contains("accordion-design-tab")
        ? target
        : target.parentElement;
      const group = item.dataset.actabGroup;
      const id = item.dataset.actabId;

      tabs.forEach(function (tab) {
        if (tab.dataset.actabGroup === group) {
          if (tab.dataset.actabId === id) {
            tab.classList.add("accordion-design-active");
          } else {
            tab.classList.remove("accordion-design-active");
          }
        }
      });

      labels.forEach(function (label) {
        const tabItem = label.parentElement;

        if (tabItem.dataset.actabGroup === group) {
          if (tabItem.dataset.actabId === id) {
            tabItem.classList.add("accordion-design-active");
          } else {
            tabItem.classList.remove("accordion-design-active");
          }
        }
      });
    }

    labels.forEach(function (label) {
      label.addEventListener("click", toggleShow);
    });

    tabs.forEach(function (tab) {
      tab.addEventListener("click", toggleShow);
    });
  }, []);

  return (
    <React.Fragment>
      <Dashboard {...props}>
        <section className="accordion-design">
          <section className="accordion-design-tabs">
            <button
              className="accordion-design-tab accordion-design-active"
              data-actab-group="0"
              data-actab-id="0"
            >
              Tab 1
            </button>
            <button
              className="accordion-design-tab"
              data-actab-group="0"
              data-actab-id="1"
            >
              Tab 2
            </button>
            <button
              className="accordion-design-tab"
              data-actab-group="0"
              data-actab-id="2"
            >
              Tab 3
            </button>
            <button
              className="accordion-design-tab"
              data-actab-group="0"
              data-actab-id="3"
            >
              Tab 4
            </button>
            <button
              className="accordion-design-tab"
              data-actab-group="0"
              data-actab-id="4"
            >
              Tab 5
            </button>
          </section>
          <section className="accordion-design-content">
            <article
              className="accordion-design-item accordion-design-active"
              data-actab-group="0"
              data-actab-id="0"
            >
              <h4 className="accordion-design-item__label">Tab 1</h4>
              <div className="accordion-design-item__container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, deserunt minima? Ut facere minus, ipsa dolore
                  animi quis alias eos, porro corporis quod esse quidem. Maxime
                  a aperiam perspiciatis architecto?
                </p>
              </div>
            </article>
            <article
              className="accordion-design-item"
              data-actab-group="0"
              data-actab-id="1"
            >
              <h4 className="accordion-design-item__label">Tab 2</h4>
              <div className="accordion-design-item__container">
                <p>
                  reprehenderit temporibus, assumenda cupiditate consequatur
                  soluta odit ex repudiandae delectus cumque, provident hic sed
                  quod? Quis, nam. Similique eaque quae vel recusandae expedita
                  qui sint fugiat, nisi assumenda et ex molestiae atque deleniti
                  magni, ipsam libero!
                </p>
              </div>
            </article>
            <article
              className="accordion-design-item"
              data-actab-group="0"
              data-actab-id="2"
            >
              <h4 className="accordion-design-item__label">Tab 3</h4>
              <div className="accordion-design-item__container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, deserunt minima? Ut facere minus, ipsa dolore
                  animi quis alias eos, porro corporis quod esse quidem. Maxime
                  a aperiam perspiciatis architecto?
                </p>
              </div>
            </article>
            <article
              className="accordion-design-item"
              data-actab-group="0"
              data-actab-id="3"
            >
              <h4 className="accordion-design-item__label">Tab 4</h4>
              <div className="accordion-design-item__container">
                <p>
                  psum dolor sit amet, consectetur adipisicing elit. Voluptates,
                  deserunt minima? Ut facere minus, ipsa dolore
                </p>
              </div>
            </article>
            <article
              className="accordion-design-item"
              data-actab-group="0"
              data-actab-id="4"
            >
              <h4 className="accordion-design-item__label">Tab 5</h4>
              <div className="accordion-design-item__container">
                <p>
                  aborum similique facere quae. Quo cupiditate ad iste qui
                  aliquam quibusdam quod, ut doloremque ipsa quas soluta,
                  sapiente possimus, tempora rerum ab nesciunt vitae molestiae
                  dolor earum illum repudiandae! Voluptas sed, soluta facere
                  nisi perferendis cupiditate! Dicta et praesentium non ab, quod
                  commodi, illo saepe accusantium tempora autem eos nemo. Animi,
                  pariatur placeat laudantium dolorib!
                </p>
              </div>
            </article>
          </section>
        </section>

        <style jsx>{`
          .accordion-design {
            $accordion-design: &;

            &-tabs {
              display: none;
              :focus {
                outline: none;
              }
            }

            &-item {
              border-bottom: 1px solid #e0e0e0;

              &:last-child {
                border: none;
              }

              &__label {
                margin: 0;
                padding: 1.25rem;
                cursor: pointer;
                transition: padding 0.2s ease;
                position: relative;

                &:after {
                  content: "";
                  height: 4px;
                  width: 4px;
                  position: absolute;
                  top: -4px;
                  right: 1.25rem;
                  bottom: 0;
                  margin: auto;
                  border: 3px solid transparent;
                  border-radius: 2px;
                  transform: rotate(45deg);
                  border-color: transparent #318df0 #318df0 transparent;
                  opacity: 1;
                  transition: opacity 0.1s ease;
                }
              }

              &__container {
                padding: 0 1.25em;
                height: 0;
                overflow: hidden;
                opacity: 0;
                transition: padding 0.2s ease, opacity 0.5s 0.15s ease;
              }
            }

            &-active {
              .accordion-design-item {
                &__label {
                  padding-bottom: 0;

                  cursor: inherit;

                  &:hover {
                    background: none;
                  }

                  &:after {
                    opacity: 0;
                  }
                }

                &__container {
                  padding: 1.25em;
                  height: auto;
                  opacity: 1;

                  p,
                  h1,
                  h2,
                  h3,
                  h4,
                  h5,
                  h6 {
                    &:first-child {
                      margin-top: 0;
                    }

                    &:last-child {
                      margin-bottom: 0;
                    }
                  }
                }
              }
            }
          }

          @media (min-width: 900px) {
            .accordion-design-tabs {
              display: flex;
              border-bottom: 1px solid #e0e0e0;

              .accordion-design-tab {
                background: #fff;
                padding: 1rem 2rem;
                font: inherit;
                flex: 1;
                border: none;
                cursor: pointer;
                transition: background 0.1s ease;
                &:hover {
                  background: rgba(#fff, 0.01);
                }

                &:last-child {
                  border-right: 0;
                }

                &:hover {
                  background: #dadada;
                }

                &.accordion-design-active {
                  background: #f0f0f0;
                  border-bottom: 3px solid #318df0;
                  font-weight: bolder;
                  color: #318df0;
                }

                &.accordion-design-active :focus {
                  outline: none;
                }
              }
            }

            .accordion-design-item {
              padding: 2.4rem;
              display: none;
              border: none;
              // background: $color_white;
              min-height: 260px;

              &__label,
              &__container {
                padding: 0;
                transition: inherit;
              }

              &__label {
                display: none;
              }

              &.accordion-design-active {
                display: block;

                .accordion-design-item__container {
                  padding: 0;
                }
              }
            }
          }

          .accordion-design {
            // box-shadow: 0 1em 2em -0.9em rgba(#000, 0.7);
            overflow: hidden;
            width: 100%;
          }
        `}</style>
      </Dashboard>
    </React.Fragment>
  );
};

export default AccordionExample;
