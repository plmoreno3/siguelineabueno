DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 20)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 125)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 90)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 90)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 15)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 20)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 125)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1)) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 90)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 90)
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 15)
        }
    }
})
