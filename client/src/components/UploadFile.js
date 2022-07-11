import React, { useState } from 'react';
import FileUploading from 'react-files-uploading';
import Image from '~/components/Image';
import { TbDragDrop } from 'react-icons/tb';
import { AiOutlineFileExcel, AiOutlineFileAdd } from 'react-icons/ai';
import { Player } from 'react-tuby';
import Button from '~/components/Button';
import 'react-tuby/css/main.css';

const useUploadFile = (typeAccest = ['image', 'video', 'application']) => {
  const [files, setFiles] = useState([]);
  const [filesReview, setFilesReview] = useState([]);

  const onChange = (fileList) => {
    // filter file type in typeAccest
    const filesValidate = fileList.filter((file) => {
      const fileType = file.type.split('/')[0];
      return typeAccest.includes(fileType);
    });

    const review = filesValidate.map((file) => {
      return {
        url: URL.createObjectURL(file),
        file,
      };
    });

    setFiles(filesValidate);
    setFilesReview(review);
  };

  const renderUiUpload = () => {
    return (
      <FileUploading multiple maxFileSize={1} value={files} maxNumber={10} onChange={onChange}>
        {({
          fileList,
          errors,
          isDragging,
          onFileUpload,
          onFileRemoveAll,
          onFileUpdate,
          onFileRemove,
          dragProps,
        }) => {
          return (
            <div className="">
              <div
                {...dragProps}
                type="button"
                className={`flex justify-center  m-4 gap-4 flex-wrap ring-2 ring-primary rounded-lg p-4 min-h-[200px] ${
                  isDragging ? '!ring-red-500' : ''
                }`}
              >
                {filesReview.length === 0 && (
                  <TbDragDrop className="w-[50px] h-[50px] my-auto animate-pulse" />
                )}
                {filesReview.map((file, index) => (
                  <div key={`file-${index}`} className="file-item text-center">
                    <p>{file.file.name}</p>

                    <div className="">
                      {file.file.type.includes('image') && (
                        <div className="relative group cursor-pointer">
                          <Image
                            className="absolute top-0 right-0 left-0 bottom-0 w-[300px] h-auto !block"
                            src={file.url}
                          />
                          <Button
                            className="absolute top-1/3 left-5 hidden group-hover:!block"
                            id={`update_${index}`}
                            type="button"
                            onClick={() => onFileUpdate(index)}
                          >
                            {`Update ${index}`}
                          </Button>
                          <Button
                            className="absolute top-1/3 right-5 hidden group-hover:!block"
                            id={`remove_${index}`}
                            type="button"
                            onClick={() => onFileRemove(index)}
                          >
                            {`Remove ${index}`}
                          </Button>
                        </div>
                      )}
                      {file.file.type.includes('video') && (
                        <div className="relative group cursor-pointer">
                          <Player dimensions={{ width: '300px', height: '200px' }} src={file.url}>
                            {(ref, props) => <video ref={ref} {...props} autoPlay={false} loop />}
                          </Player>
                          <Button
                            className="absolute top-1/3 left-5 hidden group-hover:!block"
                            id={`update_${index}`}
                            type="button"
                            onClick={() => onFileUpdate(index)}
                          >
                            {`Update ${index}`}
                          </Button>
                          <Button
                            className="absolute top-1/3 right-5 hidden group-hover:!block"
                            id={`remove_${index}`}
                            type="button"
                            onClick={() => onFileRemove(index)}
                          >
                            {`Remove ${index}`}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {errors && (
                <div>
                  {errors.maxNumber && <span>Number of selected files exceed maxNumber</span>}
                  {errors.acceptType && <span>Your selected file type is not allow</span>}
                  {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                </div>
              )}

              <Button
                outline
                leftIcon={<AiOutlineFileAdd />}
                id="btn-add"
                type="button"
                onClick={onFileUpload}
              >
                upload
              </Button>

              <Button
                outline
                leftIcon={<AiOutlineFileExcel />}
                id="btn-remove"
                type="button"
                onClick={onFileRemoveAll}
              >
                Remove all
              </Button>
            </div>
          );
        }}
      </FileUploading>
    );
  };

  return { filesReview, renderUiUpload };
};

export default useUploadFile;
