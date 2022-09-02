import { useState } from 'react';
import { MovingBox, MovingBoxContextProvider } from 'movingbox';

export const ButtonModal = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div className="inline-block">
          <MovingBox  as="h1">Button converted to a modal window</MovingBox>
          {isOpen ? (
            <MovingBox animKey="modal" className="modal">
              <div>
                <h2>I am modal</h2>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos tempora corporis, magnam iure, impedit laborum
                  fuga quidem, repellendus excepturi aut a aspernatur beatae et
                  ab hic ut. Quod, corporis obcaecati?
                </div>
              </div>
              <div className="modal-actions">
                <button onClick={toggleModal}>close</button>
              </div>
            </MovingBox>
          ) : (
            <MovingBox animKey="modal" as="button" onClick={toggleModal}>
              Open modal
            </MovingBox>
          )}
        </div>
    );
}
