import React from 'react';
import { Loading } from '@/components/fetchdata';
import { get } from '@/components/common/utils';
import { useGetScores } from '@/components/scores/hooks';
import '@/components/scores/styles/scores.css';

export default function ScoresTable() {
  const golfer_id = get('golfer_id');
  const from_date_played = get('from_date_played');
  const [loading] = useGetScores(golfer_id, from_date_played);

  if (loading) return <Loading />;
  const scores = get('scores').Scores;
  console.log('😊😊 scores', scores);
  function generateRows() {
    let oddRow = false;
    for (var i = 0; i < scores.length; i++) {
      oddRow = !oddRow;
      rowsTD[i] = (
        <tr key={i} className={`${oddRow ? '' : 'tr--shaded'}`}>
          <td>{rows[i][0]}</td>
          {generateCols(i, oddRow)}
        </tr>
      );
    }
    return rowsTD;
  }

  return (
    <>
      <br />
      <h3 className='center'>Revision Scores for GHIN Number {golfer_id}</h3>
      <br />
      <table id='scores-table'>
        <thead>
          <tr>
            <th>Score</th>
            <th>Date</th>
            <th>C.R./Slope</th>
            <th>PCC</th>
            <th>Differential</th>
            <th>Course/Tee</th>
          </tr>
        </thead>
        <tbody>
          {scores
            .filter((score) => score.revision)
            .map((score, index) => {
              const evenRow = Math.abs(index % 2) == 0;
              return (
                <tr key={index} className={`${evenRow ? '' : 'tr--shaded'}`}>
                  <td>
                    {score.used && '* '}
                    {!score.used && '  '}
                    {score.adjusted_gross_score} {score.score_type}
                  </td>
                  <td>{score.played_at}</td>
                  <td>
                    {score.course_rating}/{score.slope_rating}
                  </td>
                  <td>{score.PCC}</td>
                  <td>{score.differential}</td>
                  <td>{score.ghin_course_name_display}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
