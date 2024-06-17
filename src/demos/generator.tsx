import React, { useCallback, useRef, useState } from 'react';
import {
  BizDescriptions,
  BizForm,
  BizFormItemColor,
  BizFormItemNumber,
  BizFormItemRadio,
  BizFormItemSelect,
  BizFormItemSwitch,
  BizFormItemTextArea,
  BizFormItemUpload,
} from 'antd-more';
import { debounce } from 'ut2';
import { createPuzzle, Result } from 'create-puzzle';
import { Affix, Alert, Button, Card, Col, Empty, message, Row, Spin } from 'antd';
import styles from './generator.less';

enum ImgSourceType {
  Upload,
  Input,
}

const ImgSourceTypeOptions = [
  {
    label: '上传图片',
    value: ImgSourceType.Upload,
  },
  {
    label: '远程地址',
    value: ImgSourceType.Input,
  },
];

// 输入类型
enum InputType {
  Custom,
  Default,
}
const LocationTypeOptions = [
  {
    label: '随机',
    value: InputType.Default,
  },
  {
    label: '自定义',
    value: InputType.Custom,
  },
];
const ImageWidthTypeOptions = [
  {
    label: '图片宽度',
    value: InputType.Default,
  },
  {
    label: '自定义',
    value: InputType.Custom,
  },
];
const ImageHeightTypeOptions = [
  {
    label: '图片高度',
    value: InputType.Default,
  },
  {
    label: '自定义',
    value: InputType.Custom,
  },
];
// 拼图点选项
const PointsOptions = [
  {
    label: '2/3/4',
    value: '',
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
];

// 拼图等高类型
enum PuzzleEqualHeightType {
  Yes,
  No,
}
const PuzzleEqualHeightTypeOptions = [
  {
    label: '是',
    value: PuzzleEqualHeightType.Yes,
  },
  {
    label: '否',
    value: PuzzleEqualHeightType.No,
  },
];

const FormatOptions = [
  {
    label: 'dataURL',
    value: 'dataURL',
  },
  {
    label: 'blob',
    value: 'blob',
  },
];

const colspan = {
  sm: 12,
  xs: 24,
};

const initialValues = {
  typeX: InputType.Default,
  typeY: InputType.Default,
  offsetX: 0,
  offsetY: 0,
  width: 60,
  height: 60,
  margin: 2,
  points: PointsOptions[0].value,
  borderWidth: 2,
  borderColor: 'rgba(255,255,255,0.7)',
  fillColor: 'rgba(255,255,255,0.7)',
  equalHeight: PuzzleEqualHeightType.Yes,

  bgWidthType: InputType.Default,
  bgHeightType: InputType.Default,
  bgOffsetX: 0,
  bgOffsetY: 0,

  format: FormatOptions[1].value,
  quality: 0.8,

  imageWidthType: InputType.Default,
  imageHeightType: InputType.Default,

  cacheImage: true,
};

function Demo() {
  const [form] = BizForm.useForm();
  const typeX = BizForm.useWatch(['typeX'], form);
  const typeY = BizForm.useWatch(['typeY'], form);
  const bgWidthType = BizForm.useWatch(['bgWidthType'], form);
  const bgHeightType = BizForm.useWatch(['bgHeightType'], form);
  const imageWidthType = BizForm.useWatch(['imageWidthType'], form);
  const imageHeightType = BizForm.useWatch(['imageHeightType'], form);
  const imgSourceType = BizForm.useWatch(['imgSourceType'], form);

  const [result, setResult] = useState<Result>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const countRef = useRef(1);

  const create = useCallback((values?: any) => {
    const {
      imgSourceType,
      imgSourceUrl,
      img,
      typeX: internalTypeX,
      typeY: internalTypeY,
      offsetX,
      offsetY,
      bgWidthType,
      bgHeightType,
      bgWidth: internalBgWidth,
      bgHeight: internalBgHeight,
      bgOffsetX,
      bgOffsetY,
      equalHeight: internalEqualHeight,

      imageWidthType,
      imageHeightType,
      imageWidth: internalImageWidth,
      imageHeight: internalImageHeight,
      cacheImage: outCacheImage,
      ...restValues
    } = values || form.getFieldsValue();

    if (imgSourceType === ImgSourceType.Upload) {
      if (!Array.isArray(img) || !img[0]) {
        setResult(undefined);
        message.error('请上传图片');
        return;
      }
    } else {
      if (!imgSourceUrl) {
        setResult(undefined);
        message.error('请输入图片地址');
        return;
      }
    }

    const count = countRef.current;

    setLoading(true);

    const url =
      imgSourceType === ImgSourceType.Upload ? img[0]?.originFileObj || img[0] : imgSourceUrl;
    const x = internalTypeX === InputType.Default ? undefined : offsetX;
    const y = internalTypeY === InputType.Default ? undefined : offsetY;
    const bgWidth = bgWidthType === InputType.Default ? undefined : internalBgWidth;
    const bgHeight = bgHeightType === InputType.Default ? undefined : internalBgHeight;
    const bgOffset = [bgOffsetX, bgOffsetY];

    const imageWidth = imageWidthType === InputType.Default ? undefined : internalImageWidth;
    const imageHeight = imageHeightType === InputType.Default ? undefined : internalImageHeight;
    let cacheImage = outCacheImage;

    const equalHeight = internalEqualHeight === PuzzleEqualHeightType.Yes ? true : false;

    if (
      cacheImage &&
      ((!imageWidth && typeof internalImageWidth === 'number') ||
        (!imageHeight && typeof internalImageHeight === 'number'))
    ) {
      cacheImage = false;
    }

    createPuzzle(url, {
      x,
      y,
      bgWidth,
      bgHeight,
      bgOffset,
      imageWidth,
      imageHeight,
      equalHeight,
      cacheImage,
      ...restValues,
    })
      .then((res) => {
        if (count === countRef.current) {
          setError(null);
          setResult(res);
          console.log(res);
        }
      })
      .catch((err) => {
        if (count === countRef.current) {
          setResult(undefined);
          setError(err?.message || err);
        }
      })
      .finally(() => {
        if (count === countRef.current) {
          setLoading(false);
        }
      });
  }, []);

  const deouncedCreate = useCallback(debounce(create, 300), [create]);

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col {...colspan}>
          <BizForm
            form={form}
            submitter={false}
            labelWidth={112}
            initialValues={{
              imgSourceType: ImgSourceType.Upload,
              ...initialValues,
            }}
            onValuesChange={(_, values) => {
              countRef.current += 1;
              deouncedCreate(values);
            }}
          >
            <BizFormItemRadio
              label="图片源类型"
              name="imgSourceType"
              options={ImgSourceTypeOptions}
              hideLabel
              optionType="button"
              radioGroupProps={{
                buttonStyle: 'solid',
              }}
            />
            <BizFormItemUpload
              type="avatar"
              name="img"
              title="点击上传图片"
              extra="上传后再点击图片可以重新上传"
              className={styles.itemUpload}
              maxSize={50 * 1024 * 1024}
              hidden={imgSourceType !== ImgSourceType.Upload}
            />
            <BizFormItemTextArea
              label="图片地址"
              name="imgSourceUrl"
              placeholder="请输入图片地址"
              hideLabel
              disabledWhiteSpace
              allowClear
              inputProps={{
                size: 'large',
                autoSize: { minRows: 2, maxRows: 6 },
              }}
              hidden={imgSourceType !== ImgSourceType.Input}
            />
            <Card
              title="配置项"
              size="small"
              className={styles.configWrapper}
              extra={
                <Button
                  type="link"
                  size="small"
                  style={{ margin: '-1px 0' }}
                  onClick={() => {
                    form.setFieldsValue(initialValues);
                    countRef.current += 1;
                    create();
                  }}
                >
                  重置
                </Button>
              }
            >
              <Card title="拼图" size="small" type="inner">
                <BizFormItemRadio
                  label="x 轴偏移"
                  name="typeX"
                  options={LocationTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="offsetX"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      style={{ margin: 0 }}
                      hidden={typeX !== InputType.Custom}
                    />
                  }
                />
                <BizFormItemRadio
                  label="y 轴偏移"
                  name="typeY"
                  options={LocationTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="offsetY"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      style={{ margin: 0 }}
                      hidden={typeY !== InputType.Custom}
                    />
                  }
                />
                <Row>
                  <Col {...colspan}>
                    <BizFormItemNumber
                      label="宽度"
                      name="width"
                      precision={0}
                      inputProps={{ min: 20 }}
                    />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber
                      label="高度"
                      name="height"
                      precision={0}
                      inputProps={{ min: 20 }}
                    />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber label="留白" name="margin" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemSelect label="随机拼图点" name="points" options={PointsOptions} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber label="描边宽度" name="borderWidth" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemColor label="描边颜色" name="borderColor" colorMode="rgb" />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemColor label="填充颜色" name="fillColor" colorMode="rgb" />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemRadio
                      label="等高"
                      name="equalHeight"
                      optionType="button"
                      options={PuzzleEqualHeightTypeOptions}
                      tooltip="等高时 y 轴始终为 0"
                    />
                  </Col>
                </Row>
              </Card>
              <Card title="背景图" size="small" type="inner">
                <BizFormItemRadio
                  label="宽度"
                  name="bgWidthType"
                  options={ImageWidthTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="bgWidth"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      style={{ margin: 0 }}
                      hidden={bgWidthType !== InputType.Custom}
                    />
                  }
                />
                <BizFormItemRadio
                  label="高度"
                  name="bgHeightType"
                  options={ImageHeightTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="bgHeight"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      style={{ margin: 0 }}
                      hidden={bgHeightType !== InputType.Custom}
                    />
                  }
                />
                <Row>
                  <Col {...colspan}>
                    <BizFormItemNumber label="x 轴偏移" name="bgOffsetX" precision={0} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber label="y 轴偏移" name="bgOffsetY" precision={0} />
                  </Col>
                </Row>
              </Card>
              <Card title="导出图片" size="small" type="inner">
                <Row>
                  <Col {...colspan}>
                    <BizFormItemSelect label="格式" name="format" options={FormatOptions} />
                  </Col>
                  <Col {...colspan}>
                    <BizFormItemNumber
                      label="质量"
                      name="quality"
                      precision={2}
                      step={0.01}
                      max={1}
                      min={0}
                    />
                  </Col>
                </Row>
              </Card>
              <Card title="上传的图片" size="small" type="inner">
                <BizFormItemRadio
                  label="宽度"
                  name="imageWidthType"
                  options={ImageWidthTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="imageWidth"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      style={{ margin: 0 }}
                      hidden={imageWidthType !== InputType.Custom}
                    />
                  }
                />
                <BizFormItemRadio
                  label="高度"
                  name="imageHeightType"
                  options={ImageHeightTypeOptions}
                  className={styles.itemWrapperFlexNone}
                  contentAfter={
                    <BizFormItemNumber
                      name="imageHeight"
                      precision={0}
                      inputProps={{
                        min: 0,
                      }}
                      style={{ margin: 0 }}
                      hidden={imageHeightType !== InputType.Custom}
                    />
                  }
                />
                <BizFormItemSwitch
                  label="缓存"
                  name="cacheImage"
                  tooltip="缓存最近加载成功的图片。注意图片宽高也会一并缓存。"
                />
              </Card>
            </Card>
          </BizForm>
        </Col>
        <Col {...colspan}>
          <Affix>
            <Card
              title="生成结果"
              size="small"
              styles={{
                body: {
                  maxHeight: 'calc(100vh - 80px)',
                  overflowY: 'auto',
                },
              }}
              className={styles.result}
              extra={
                <Button
                  type="link"
                  size="small"
                  style={{ margin: '-1px 0' }}
                  onClick={() => {
                    countRef.current += 1;
                    create();
                  }}
                >
                  重新生成
                </Button>
              }
            >
              {result ? (
                <Spin spinning={loading} delay={300}>
                  <BizDescriptions
                    column={1}
                    labelStyle={{ width: 98, justifyContent: 'flex-end' }}
                  >
                    <BizDescriptions.Item
                      label="背景图"
                      tooltip="背景图展示比例可能有缩放，不影响图片实际大小"
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <img src={result.bgUrl} alt="背景图" />
                      </div>
                    </BizDescriptions.Item>
                    <BizDescriptions.Item label="拼图">
                      <img src={result.puzzleUrl} alt="拼图" />
                    </BizDescriptions.Item>
                    <BizDescriptions.Item label="x 轴偏移">{result.x}</BizDescriptions.Item>
                    <BizDescriptions.Item label="y 轴偏移">{result.y}</BizDescriptions.Item>
                  </BizDescriptions>
                </Spin>
              ) : error ? (
                <Alert type="error" message="Error" description={JSON.stringify(error)} showIcon />
              ) : (
                <Empty description="请上传图片" />
              )}
            </Card>
          </Affix>
        </Col>
      </Row>
    </div>
  );
}

export default Demo;
