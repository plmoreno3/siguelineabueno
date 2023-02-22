DFRobotMaqueenPlus.i2c_init()
DFRobotMaqueenPlus.PID(PID.OFF)
DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 100)

def on_forever():
    if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 75)
    else:
        if DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 20)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 125)
        if DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1):
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 90)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 90)
        if DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1:
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 60)
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 15)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1):
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 20)
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 125)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1):
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 90)
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 90)
        if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 60)
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 15)
basic.forever(on_forever)
