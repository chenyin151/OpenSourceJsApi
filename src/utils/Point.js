/*
 * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴
 * @version: 
 * @Author: cy
 * @Date: 2020-10-14 16:34:37
 * @LastEditors: cy
 * @LastEditTime: 2020-10-14 16:58:49
 */
export default class Point {
    /**
     * 创建一个新点。如果不向此方法传递任何参数，则在 (0,0) 处创建一个点
     * @param {Number} $x 水平坐标 
     * @param {Number} $y 垂直坐标 
     */
    constructor($x = 0, $y = 0) {
        
    }
    /**
     * 将另一个点的坐标添加到此点的坐标以创建一个新点
     * @param { Point } $v 要添加的点 
     * @return {Point} 新点 
     */
    add($v) {

    }
    /**
     * 将源 Point 对象中的所有点数据复制到调用方 Point 对象中
     * @param {type} $sourcePoint
     * @return {type} 
     */
    copyFrom($sourcePoint) {

    }
    /**
     * 创建此 Point 对象的副本 
     * @return {Point} 新的Point对象 
     */
    clone() {

    }
    /**
     * [静态] 返回 pt1 和 pt2 之间的距离 
     * @param {Point} pt1
     * @param {Point} pt2 
     * @return {Number} 
     */
    static distance($pt1, $pt2) {

    }
    /**
     * 确定两个点是否相同
     * @param {Point} $toCompare 
     * @return {Boolean} 
     */
    equal($toCompare) {

    }
    /**
     * 将 (0,0) 和当前点之间的线段缩放为设定的长度
     * @param {Number} $thickness 
     */
    normalize($thickness) {

    }

    /**
     * 按指定量偏移 Point 对象
     * @param {Number} $dx
     * @param {Number} $dy 
     */
    offset($dx, $dy) {

    }
    /**
     * [静态] 将一对极坐标转换为笛卡尔点坐标 
     * @param {Number}  $len 
     * @param {Number}  $angle
     * @return {Point}
     */
    static polar($len, $angle) {

    }
    /**
     * 将 Point 的成员设置为指定值 
     * @param {Number} $xa
     * @param {Number} $ya 
     */
    setTo($xa, $ya) {

    }
    /**
     * 从此点的坐标中减去另一个点的坐标以创建一个新点 
     * @param {Point} $v 
     * @return {Point} 
     */
    substract($v) {

    }
    /**
     * 返回包含 x 和 y 坐标的值的字符串
     * @return {String} 
     */
    toString() {
        
    }
    /**
     * [静态] 确定两个指定点之间的点。参数 f 确定新的内插点相对于参数 pt1 和 pt2 指定的两个端点所处的位置。参数 f 的值越接近 1.0，则内插点就越接近第一个点（参数 pt1）。参数 f 的值越接近 0，则内插点就越接近第二个点（参数 pt2）
     * @param { Point } $pt1  第一个点 
     * @param { Point } $pt2 第二个点
     * @param { Point } $f 两个点之间的内插级别，表示新点将位于$pt1和$pt2连成的直线上的什么位置，如果$f=1,则返回pt1,如果$f=0,则返回$pt2
     * @return { Point } 新的内插点
     */
    static interpolate($pt1, $pt2, $f) {
        if ($pt1.y === $pt2.y) return { y: $pt1.y, x: $pt1.x + ($pt2.x - $pt1.x) *$f };
        if ($pt1.x === $pt2.x) return { y: $pt1.y + ($pt2.y - $pt1.y) *$f, x: $pt1.x };
        let distX =($pt2.x - $pt1.x);
        let distY =($pt2.y - $pt1.y);
        let angle = Math.atan2(distY, distX);
        let x = $pt1.x + distX * $f;
        let y = $pt1.y + Math.tan(angle) * distX * $f
        return { x: x, y: y}
    }
}