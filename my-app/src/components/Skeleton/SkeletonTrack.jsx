import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "./Sceleton.styles";

function SkeletonTrack() {
  return (
    <SkeletonTheme
      baseColor="#bbb4b4"
      highlightColor="#444"
      className="skeleton"
    >
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton width={51} height={51} className="skeleton__block_1" />
        <Skeleton width={250} height={25} className="skeleton__block_2" />
        <Skeleton width={250} height={25} className="skeleton__block_3" />
        <Skeleton width={250} height={25} className="skeleton__block_4" />
      </S.Skeleton>
    </SkeletonTheme>
  )
}

export default SkeletonTrack;